import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './images/logo.png';
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 flex justify-between items-center">
     <Link to="/" className="text-white flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-12 m-1" />
        <span className="text-2xl font-bold ml-2">Fitness Center</span>
      </Link>

    

      <ul className="flex mr-3 rounded-sm " >
        <li className="list-none m-5 rounded-md">
          <NavLink to="/" className="text-white p-2 hover:bg-blue-700 rounded-md" activeClassName="active">Home</NavLink>
        </li>
        <li className="list-none m-5">
          <NavLink to="/about" className="text-white p-2 hover:bg-blue-700 rounded-md">AboutUs</NavLink>
        </li>
        <li className="list-none m-5 ">
          <NavLink to="/adminlogin" className="text-white p-2 hover:bg-blue-700 rounded-md">Login Admin</NavLink>
        </li>
        <li className="list-none m-5">
          <NavLink to="/coachlogin" className="text-white p-2 hover:bg-blue-700 rounded-md">Login Coach</NavLink>
        </li>
        <li className="list-none m-5">
          <NavLink to="/register" className="text-white p-2 hover:bg-blue-700 rounded-md">Rigister</NavLink>
        </li>
        <li className="list-none m-5">
          <NavLink to="/memberlogin" className="text-white p-2 hover:bg-blue-700 rounded-md">Loging Member</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
