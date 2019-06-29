import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';

import Nav from './Nav.jsx';
import Login from './Login.jsx'
// import activity from "./activity.jsx";
import DayActivities from "./dayActivities.jsx";
import DatePicker from "./datePicker.jsx";
import TodayActivity from "./TodayActivity.jsx";
import CompletedActivities from './CompletedActivities.jsx'

// import adminActivities from "./adminActivities.jsx";
// import adminActivity from "./adminActivity.jsx";
// import adminCategories from "./adminCategories.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const cookies = new Cookies()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      activities: [{ duration: 60, name: "Japanese 100" }, { duration: 120, name: "Japanese 200" }, { duration: 30, name: "Japanese 300" }],
      categories: ["coding", "japanese", "cooking", "swimming"],
      email: cookies.get('email'),
    }
  }


  // fetchData = () => {
  //   axios.get('/api/user_activities', {
  //     params:{
  //       email: this.state.email,
  //       date: "2019-06-22"
  //     }
  //   }) // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     this.setState({
  //       activities: response.data.activities,
  //       categories: response.data.categories
  //     });
  //   })
  // }

  setUser = (email) => {
    this.setState({ email: email }, () => console.log('current state after setting user', this.state))
  }

  render() {

    return (
      <Router>
        <Nav cookies={cookies} setUser={this.setUser} setRedirect={this.setRedirect} />

        <main className="main-container">
          <Switch>
            <Route path="/admin/activities/:activityID" component={adminActivity} />
            <Route path="/admin/activities" component={adminActivities} />
            <Route path="/admin/categories" component={adminCategories} />
            <Route
              path="/:day/activities/:activityID"
              render={(props) => {
                console.log('KV', props)
                return <TodayActivity {...props} cookies={cookies} activities={this.state.activities} params={props.match.params} />
              }
              } />
            <Route
              path="/schedule"
              render={(props) => <DatePicker {...props} state={this.state} />}
            />

            <Route
              path="/:day/activities/"
              render={(props) => <DayActivities {...props} cookies={cookies} params={props.match.params} />}
            />
            <Route
              path="/completed_activities"
              render={(props) => {
                console.log('this is from appjs', props)
              return <CompletedActivities {...props} params={props.match.params} setUser={this.setUser} cookies={cookies} />}

              }/>
              <Route
              path="/completed_activities/:id"
              render={(props) => {
                console.log('this is from appjs', props)
                return <CompletedActivityContent {...props} cookies={cookies} activities={this.state.activities} params={props.match.params} />}
              }/>

            <Route
              path="/"
              render={(props) => <Login {...props} setUser={this.setUser} cookies={cookies} />}
            />
          </Switch>
        </main>
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

// function activity() {
//   return <h2>This is the component for /:day/activities/:activityID</h2>;
// }
//  {/* <ul>
//         <li>
//           <Link to="/admin/activities" currentpath = '/'>/admin/activities</Link>
//         </li>

//         <li>
//           <Link to="/admin/categories" currentpath = '/'>/admin/categories</Link>
//         </li>
//         <li>
//           <Link to="/admin/activities/105" currentpath = '/'>/admin/activities/105</Link>
//         </li>
//         <li>
//           <Link to="/06052019/activities/" currentpath = '/'>06052019/activities/</Link>
//         </li>

//         <li>
//           <Link to="/06012019/activities/100" currentpath = '/'>06012019/activities/100</Link>
//         </li>

//       </ul> */}


export default App;
