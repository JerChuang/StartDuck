import React, {Component} from 'react';
import ActivityItem from './ActivityItem.jsx'
import {Link} from "react-router-dom";


class ActivitiesList extends Component {
  render() {
    console.log('this.props from activities list:', this.props)
    const activities = this.props.activities.map(activity => {
      return <Link to={`/${activity.date}/activities/${activity.activity_id}`} >
                <ActivityItem key = {activity.id} {...activity } />  
             </Link>  
    })

    return (
      <main className="dayActivities_activitiesList">
        {activities}
      </main>      
    );
  }
}

export default ActivitiesList;
