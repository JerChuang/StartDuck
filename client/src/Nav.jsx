import React from 'react';
import { ReactComponent as Logo } from './images/logo.svg';
import {Link} from "react-router-dom";

const Nav = (props) =>(
  <nav className="navbar">
   <div className="container-fluid">

    <Logo className="navbar_logo" />

     <Link className="link" to="/schedule" currentpath = '/'>Reschedule</Link>
     <Link className="link" to="/completed_activities" currentpath = '/'>Completed Activities</Link>

    <button className="navbar_logout">Logout</button>
   </div>
  </nav>
)

export default Nav;
