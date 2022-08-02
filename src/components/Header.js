import React from "react";
import helpImage from "./../img/help.jpeg";


function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      <img src={helpImage} alt="An image of legos" />
    </React.Fragment>
  );
}

export default Header;