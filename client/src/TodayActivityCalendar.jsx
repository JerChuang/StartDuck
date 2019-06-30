import React, {Component} from 'react';
import TodaySchedule from './TodaySchedule.jsx';
import {Link} from "react-router-dom";

class TodayActivityCalendar extends Component {
  render() {
    const activities = this.props.activities.map(activity => {
        return (
          <Link to={`/${activity.date}/activities/${activity.id}`} >
            <TodaySchedule key = {activity.id} {...activity} /> 
          </Link>
        )
      })

      return (
        <main className="todayActivityList">
          {activities}
        </main>
      );
    }
  }

export default TodayActivityCalendar;
