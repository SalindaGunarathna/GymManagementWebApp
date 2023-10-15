import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>

        <Link to="/" className="title">Fitnex Center</Link>

        <div className="menu" >
            <span>

            </span>
            <span></span>
            <span></span>
        </div>


      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
