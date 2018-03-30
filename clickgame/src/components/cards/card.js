import React from 'react';
import './card.css';
import picCard from '../Main/cards.json';

const Card = () =>{
   
   const image = picCard[0].image;

   return(
      <div className="card">
         <div className="img-container">
            <img alt={picCard[0].name} src={require(`../../images/${image}`)} width="60" />
         </div>
      </div>
   )
};


export default Card;