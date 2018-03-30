import React from 'react';
import "./nav.css";

const Nav = () =>(
   <div className="nav">
      <a className="navLogo" href="/">Clicky Game</a>
      <h3 className="navTitle">Click an Image to begin!</h3>
      <div className="scoreTitle">
         <h1>Score: 0 | Top Score: 0</h1>
      </div>
   </div>
);

export default Nav;