import React from 'react';
import logo from './images/logo.png';
import {Link} from "react-router-dom";
console.log(logo);
const Nav = (props) =>(
  <nav className="navbar">
   <div className="container-fluid">
    <img className="navbar_logo" src={logo} alt = "logo"/>

     <Link className="link" to="/schedule" currentpath = '/'>Reschedule</Link>
     <Link className="link" to="/completed_activities" currentpath = '/'>Completed Activities</Link>

    <button className="navbar_logout">Logout</button>
   </div>
  </nav>
)

export default Nav;
