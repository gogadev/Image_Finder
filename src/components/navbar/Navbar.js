import React from "react";

import navImg from "../../assets/nav.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Image Finder</h1>
      <img className="nav-img" src={navImg} alt="" />
    </nav>
  );
};

export default Navbar;
