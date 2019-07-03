import React, { Component } from 'react';
// import { ReactComponent as Logo } from './images/logo.svg';
import Logo from './images/logo.png'
import {Link, Redirect} from "react-router-dom";
import * as moment from 'moment';
import { withRouter } from 'react-router-dom';

const HideSchedule = (props) => {
  const { location } = props;
  if (location.pathname.match("/schedule")){
    return null;
  }

  return (
   <Link className="navbar_schedule" to="/schedule" currentpath = '/'>Reschedule</Link>
  )
}

const Reschedule = withRouter(HideSchedule);

class Nav extends Component {
  state = {
    redirect: false,
    redirect1: false,
  }

  logout = (e) =>{
    e.preventDefault();
    this.props.cookies.remove('email',  { path: '/' })
    this.props.setUser('')
    this.setState({redirect:true})
  };

  componentDidUpdate(){
    if (this.state.redirect){
      this.setState({redirect:false})
    }
    if (this.state.redirect1){
      this.setState({redirect1:false})
    }
  }

  redirectHome = (e) =>{
    e.preventDefault();
    this.setState({redirect1:true})
  };



  render(){
    if(this.state.redirect){
      return (
          <Redirect to='/'/>
      )
    }

    if(this.state.redirect1){
      return (
          <Redirect to={`/${moment().format('YYYY-MM-DD')}/activities`}/>
      )
    }
    if(window.location.pathname === '/schedule'){
      return(
      <nav className="navbar">
      <div className="container-fluid">
        {/* <Logo className="navbar_logo" /> */}
        <img src={Logo} alt ="Logo"className="navbar_logo" onClick={this.handleClick1}/>
        <Link className="link" to="/completed_activities" currentpath = '/'>Completed Activities</Link>
        <button className="navbar_logout" onClick={this.handleClick}>Logout</button>
      </div>
      </nav>
        )
    }
    if (this.props.cookies.get('email')){
      return(
        <nav className="navbar">
          <nav className="navbar_left">
            {/* <Logo className="navbar_logo" onClick={this.redirectHome}/> */}
            <img src={Logo} alt ="Logo"className="navbar_logo" onClick={this.redirectHome}/>
          </nav>
          <nav className="navbar_right">
            <Reschedule/>
            <Link className="navbar_complete" to="/completed_activities" currentpath='/'>Completed Activities</Link>
            <button className="navbar_logout" onClick={this.logout}>Logout</button>
          </nav>
        </nav>
    )} else{
      return(
        <nav className="navbar">
          <nav className="navbar_left">
            {/* <Logo className="navbar_logo" /> */}
            <img src={Logo} alt ="Logo" className="navbar_logo" />
          </nav>
        </nav>

      )
    }
  }
}

export default Nav;
