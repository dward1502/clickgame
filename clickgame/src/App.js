import React, { Component} from "react";
import Nav from "./components/navbar";
import Head from "./components/Header";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import char from "./cards.json";
import "./App.css";

let score = 0;
let guessCorrect = 0;
let message="Click a card to begin";


class App extends Component {
   state = {
      char, score, guessCorrect,message
   };

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

   setClicked = id =>{
    const character = this.state.char;
    const cardClicked = character.filter(chars => chars.id === id);
    
    if (cardClicked[0].click){
      guessCorrect = 0;
      message = "Incorrect. Start Over";

      for(let i = 0; i< character.length; i++){
        character[i].click = false;
      }

      this.setState({message});
      this.setState({guessCorrect});
      this.setState({character});
    }else{
      cardClicked[0].click = true;
      guessCorrect = guessCorrect + 1;
      message = "Correct Guess!"

      if(guessCorrect > score){
        score = guessCorrect;
        this.setState({score});
      }
      this.shuffle(character);
      this.setState({character});
      this.setState({guessCorrect});
      this.setState({message});
    }
  }

   render(){
      return(
         <div className="container">
            <Nav score={this.state.guessCorrect} highscore= {this.state.score} message={this.state.message}></Nav>
            <Head />
            <div className="main-container">
               {this.state.char.map(card =>(
                     <Cards 
                     setClicked= {this.setClicked}
                     id={card.id}
                     key={card.id}
                     image={card.image}
                     />
               ))}
            </div>
            <Footer />
         </div>
      );
   }
}

export default App;
 