import React from 'react';
// import { ReactComponent as Logo } from './images/logo.svg';
import Logo from './images/logo.png'
import {Link} from "react-router-dom";
function handleClick (e) {
  e.preventDefault();
  this.props.form.validateFields((err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
      this.props.selectUser(values.email)
    }
  });
};

const Nav = (props) => {

  if (props.email){
  return(
  <nav className="navbar">
   <div className="container-fluid">
    {/* <Logo className="navbar_logo" /> */}
    <img src={Logo} alt ="Logo"className="navbar_logo" />
    
    <Link className="link" to="/schedule" currentpath = '/'>Reschedule</Link>
    <Link className="link" to="/completed_activities" currentpath = '/'>Completed Activities</Link>
    <button className="navbar_logout">Logout</button>
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

export default Nav;
