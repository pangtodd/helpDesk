import React from "react";
import helpImage from "./../img/HelpDesky.png";


function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={helpImage} alt="An illustration of different people in different primary colors" />
    </React.Fragment>
  );
}

export default Header;