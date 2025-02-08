// components/Navbar.js
import React from "react";

const Navbar = ({ name }) => {
  return (
    <div>
      <h1>Hi {name}!</h1>
      <img src="logo.png" alt="App Logo" />
    </div>
  );
};

export default Navbar;
