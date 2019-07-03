import React, {Component} from 'react';
import CompletedActivitiesItem from './CompletedActivitiesItem.jsx'
import {Link} from "react-router-dom";


class CompletedActivitiesList extends Component {
  render() {
    const activities = this.props.activities.map(activity => {
      return <Link to={`/completed_activities/${activity.id}`} >
                <CompletedActivitiesItem key = {activity.id} {...activity } />
             </Link>
    })

    return (
      <main className="dayActivities_activitiesList">
        {activities}
      </main>
    );
  }
}

export default CompletedActivitiesList;
