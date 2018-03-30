import React from 'react';
import "./header.css";
import img1 from "../../images/teahupoo.jpg";

const Header = () =>(
      <div className="head-container">
      <div>
            <img src={img1} width="100%" height="375px" alt="Surfing" />
      </div>
            <h1 className="headTitle" >Clicky Game!</h1>
            <h4 className="headText">Click on an image to earn points, but don't click on any more than once!</h4>         
      </div>
);

export default Header;