// components/Navbar.js
import React from "react";
import logo from "./10400_2-08.jpg";
const Navbar = ({ name }) => {
  return (
    <div className="navbar">
      <h4>Hi {name}!</h4>
      <img src={logo} alt="App Logo" />
    </div>
  );
};

export default Navbar;
