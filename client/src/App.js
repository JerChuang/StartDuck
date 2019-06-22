import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Nav.jsx';
import { DatePicker, message, Calendar } from 'antd';
import 'antd/dist/antd.css';
// import activity from "./activity.jsx";
import dayActivities from "./dayActivities.jsx";
// import adminActivities from "./adminActivities.jsx";
// import adminActivity from "./adminActivity.jsx";
// import adminCategories from "./adminCategories.jsx";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
    }
  }
  

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
    <Router> 
      <div style={{ width: 400, margin: '100px auto' }}>
        {/* <Calendar /> */}
        {/* <div style={{ marginTop: 20 }}>
          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
        </div> */}
      </div>
      <Nav/>
      <div className="App">
        <h1>{ this.state.message }</h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
      </div>
      <ul>
          <li>
            <Link to="/admin/activities" currentPath = '/'>/admin/activities</Link>
          </li>

          <li>
            <Link to="/admin/categories" currentPath = '/'>/admin/categories</Link>
          </li>
          <li>
            <Link to="/admin/activities/105" currentPath = '/'>/admin/activities/105</Link>
          </li>
          <li>
            <Link to="/06052019/activities/" currentPath = '/'>06052019/activities/</Link>
          </li>

          <li>
            <Link to="/06012019/activities/100" currentPath = '/'>06012019/activities/100</Link>
          </li>

          <li>
            <Link to="/schedule" currentPath = '/'>Reschedule</Link>
          </li>

          <li>
            <Link to="/completed_activities" currentPath = '/'>completed_activities</Link>
          </li>

        </ul>
      <Switch>
        <Route path="/admin/activities/:activityID" component={adminActivity} />
        <Route path="/admin/activities" component={adminActivities} />
        <Route path="/admin/categories" component={adminCategories} />

        <Route path="/:day/activities/:activityID" component={activity} />
        <Route path="/:day/activities/" component={dayActivities} />
        <Route path="/schedule" component = {schedule}/>
        <Route path="/completed_activities" component = {completed_activities}/>
      </Switch>
    </Router> 
    );
  }
}

function adminActivities() {
  return <h2>This is the component for /admin/activities</h2>;
}

function adminCategories() {
  return <h2>This is the component for /admin/categories</h2>;
}

function adminActivity() {
  return <h2>This is the component for /admin/activities/:activityID</h2>;
}


// function dayActivities() {
//   return <h2>This is the component for /:day/activities/</h2>;
// }

function activity() {
  return <h2>This is the component for /:day/activities/:activityID</h2>;
}

function schedule() {
  return <h2>This is the component for reschedueling</h2>;
}

function completed_activities() {
  return <h2>This is the component for completed_activities</h2>;
}






export default App;
