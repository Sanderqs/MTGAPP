import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <li classame="nav-items">
          <Link to="/LifeCounter" className="nav-links">
            Life Counter
          </Link>
        </li>
        <li>
          <Link to="/ManaCalculator" className="nav-links">
            Mana Calculator
          </Link>
        </li>
        <li>
          <Link to="/Rulings" className="nav-links">
            Rulings
          </Link>
        </li>
        <li classame="nav-items">
          <Link to="/Randomize" className="nav-links">
            Randomize
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
