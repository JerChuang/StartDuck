import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Nav.jsx';
// import { DatePicker, message, Calendar } from 'antd';
import 'antd/dist/antd.css';
// import activity from "./activity.jsx";
import DayActivities from "./dayActivities.jsx";
// import adminActivities from "./adminActivities.jsx";
// import adminActivity from "./adminActivity.jsx";
// import adminCategories from "./adminCategories.jsx";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      activities: [{duration:30, name:"Japanese 100"}, {duration:60, name:"Japanese 200"}, {duration:120, name:"Japanese 300"}],
      categories: ["coding", "japanese", "cooking", "swimming"] ,
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
    console.log(this.state.activities)
    return (
    <Router>
      <Nav/>
      <ul>
          <li>
            <Link to="/admin/activities" currentpath = '/'>/admin/activities</Link>
          </li>

          <li>
            <Link to="/admin/categories" currentpath = '/'>/admin/categories</Link>
          </li>
          <li>
            <Link to="/admin/activities/105" currentpath = '/'>/admin/activities/105</Link>
          </li>
          <li>
            <Link to="/06052019/activities/" currentpath = '/'>06052019/activities/</Link>
          </li>

          <li>
            <Link to="/06012019/activities/100" currentpath = '/'>06012019/activities/100</Link>
          </li>

        </ul>
      <Switch>
        <Route path="/admin/activities/:activityID" component={adminActivity} />
        <Route path="/admin/activities" component={adminActivities} />
        <Route path="/admin/categories" component={adminCategories} />

        <Route path="/:day/activities/:activityID" component={activity} />
        <Route 
          path="/:day/activities/" 
          render = {(props) => <DayActivities {...props} activities={this.state.activities} categories={this.state.categories}  />}
        />
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






export default App;
