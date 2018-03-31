import React from 'react';
import './card.css';

const Card = (props) =>{

   return(
      <div className="card" onClick={() => props.setClicked(props.id)}>
         <div className="img-container">
            <img alt={props.name} src={props.image} width="185" height="185" />
         </div>
      </div>
   )   
};

export default Card;