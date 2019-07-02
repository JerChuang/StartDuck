import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Cookies from 'universal-cookie';
import Nav from './Nav.jsx';
import Login from './Login.jsx'
import DayActivities from "./dayActivities.jsx";
import DatePicker from "./datePicker.jsx";
import TodayActivity from "./TodayActivity.jsx";
import CompletedActivities from './CompletedActivities.jsx'
import CompletedActivityContent from './CompletedActivityContent.jsx'
import AdminCategories from "./AdminCategories.jsx";
import AdminActivities from "./AdminActivities.jsx";
import AdminActivity from "./AdminActivity.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const cookies = new Cookies()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: cookies.get('email'),
    }
  }

  setUser = (email) => {
    this.setState({ email: email }, () => console.log('current state after setting user', this.state))
  }

  render() {

    return (
      <Router>
        <Nav cookies={cookies} setUser={this.setUser} setRedirect={this.setRedirect} />

        <main className="main-container">
          <Switch>

            <Route
            path="/admin/activities/:id"
            render={(props) => <AdminActivity {...props} activity={this.state.activity} params={props.match.params}/>}
            />

            <Route
            path="/admin/activities"
            render={(props) => <AdminActivities {...props} activities={this.state.activities} params={props.match.params}/>}
            />

            <Route
              path="/admin/categories"
              render={(props) => <AdminCategories {...props} categories={this.state.categories} params={props.match.params}/>}
            />

            <Route
              path="/:day/activities/:activityID"
              render={(props) => {
                return <TodayActivity {...props} cookies={cookies} activities={this.state.activities} params={props.match.params} />
              }
              } />
            <Route
              path="/schedule"
              render={(props) => <DatePicker {...props} cookies={cookies} state={this.state} />}
            />

            <Route
              path="/:day/activities/"
              render={(props) => <DayActivities {...props} cookies={cookies} params={props.match.params} />}
            />
              <Route
              path="/completed_activities/:id"
              render={(props) => {
                return <CompletedActivityContent {...props} cookies={cookies} activities={this.state.activities} params={props.match.params} />}
              }/>
              <Route
                path="/completed_activities"
                render={(props) => {
                return <CompletedActivities {...props} params={props.match.params} setUser={this.setUser} cookies={cookies} />}

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

export default App;
