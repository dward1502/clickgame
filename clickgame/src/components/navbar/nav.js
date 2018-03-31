import React from 'react';
import "./nav.css";

const Nav = (props) =>(
   <div className="nav">
      <a className="navLogo" href="/">Clicky Game</a>
      <h3 className="navTitle">{props.message}</h3>
      <div className="scoreTitle">
         <h1>Score: {props.score} | Top Score: {props.highscore}</h1>
      </div>
   </div>
);

export default Nav;