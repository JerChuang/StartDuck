import React from 'react';
import logo from './images/logo.png';
console.log(logo);
const Nav = (props) =>(
  <nav className="navbar">
   
    <img className="navbar_logo" src={logo} alt = "logo"/>
  
  </nav>
)

export default Nav;
