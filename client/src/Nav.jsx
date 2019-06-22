import React from 'react';
import logo from './images/logo.png';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
console.log(logo);
const Nav = (props) =>(
  <nav className="navbar">

    <img className="navbar_logo" src={logo} alt = "logo"/>
    <Link to="/schedule" currentPath = '/'>Reschedule</Link>

    <Link to="/completed_activities" currentPath = '/'>completed_activities</Link>
    <button className="navbar_logout">Logout</button>


  </nav>
)

export default Nav;
