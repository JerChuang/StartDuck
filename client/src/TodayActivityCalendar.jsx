import React, {Component} from 'react';
import TodaySchedule from './TodaySchedule.jsx';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


class TodayActivityCalendar extends Component {
  render() {
    console.log(this.props.activities, 'this is from calendarr');
    console.log(this.props.params.activityID, 'this is from calendarractivityID');
    console.log(this.props.params.day, 'this is from calendarrdate');
    const activities = this.props.activities.map(activity => {
        return <Link to={`/${activity.date}/activities/${activity.id}`} ><TodaySchedule key = {activity.id} {...activity } /> </Link>
        
      })
  
      return (
        <main className="todayActivityList">
          {activities}
        </main>      
      );
    }
  }

export default TodayActivityCalendar
