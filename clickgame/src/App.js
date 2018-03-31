import React, { Component} from "react";
import Nav from "./components/navbar";
import Head from "./components/Header";
import Cards from "./components/cards";
import Footer from "./components/Footer";
import char from "./cards.json";
import swal from 'sweetalert'
import "./App.css";

class App extends Component {
   state = {
      char, score:0, highscore:0
   };
   endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    swal(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
}
     shuffle = (array) =>{
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
 
    clickCount = id =>{
       this.state.char.find((o,i)=>{
          if(o.id === id){
            if(char[i].count === 0){
               char[i].count == char[i].count + 1;
               this.setState({score: this.state.score + 1}, function(){
                  console.log(this.state.score);
               });
               this.shuffle(this.state.char);
               return true;
            }else{
               this.endGame();
            }
         }
      });
   }

   render(){
      return(
         <div className="container">
            <Nav score={this.state.score} highscore= {this.state.highscore}></Nav>
            <Head />
            <div className="main-container">
               {this.state.char.map(card =>(
                     <Cards 
                     clickCount= {this.clickCount}
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
 