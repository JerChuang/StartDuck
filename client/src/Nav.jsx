import React, { Component } from 'react';
// import { ReactComponent as Logo } from './images/logo.svg';
import Logo from './images/logo.png'
import {Link} from "react-router-dom";
import * as moment from 'moment';

class Nav extends Component {

  handleClick = (e) =>{
    e.preventDefault();
    console.log('this.props from nav bar', this.props.cookies.get('email'))
    this.props.cookies.remove('email')
    this.props.setUser('')
  };
  render(){
    console.log(moment().format('YYYY-MM-DD'))
    if (this.props.cookies.get('email')){
    return(
    <nav className="navbar">
    <div className="container-fluid">
      {/* <Logo className="navbar_logo" /> */}
      <img src={Logo} alt ="Logo"className="navbar_logo" />
      
      <Link className="link" to="/schedule" currentpath = '/'>Reschedule</Link>
      <Link className="link" to="/completed_activities" currentpath = '/'>Completed Activities</Link>
      <button className="navbar_logout" onClick={this.handleClick}>Logout</button>
    </div>
    </nav>
    )} else{
      return(
        <nav className="navbar">
          <div className="container-fluid">
            {/* <Logo className="navbar_logo" />  */}
            <img src={Logo} alt ="Logo"className="navbar_logo" /> 
          </div>
        </nav>

      )
    }
  }
}

export default Nav;
