import React from "react";
//import dependencies
import { Link } from "react-router-dom";

//import styles
import "./NavBar.css";

//TODO:
// 1.scalen voor mobile
// 2. keuze menu voor randomize (coinflip of dobbelsteen)
// 3. huidige pagina highlighten in menu
// 4. "hamburger menu" bij mobile
// 5. navbar.css naar styled components
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
