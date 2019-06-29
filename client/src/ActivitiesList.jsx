import React, {Component} from 'react';
import ActivityItem from './ActivityItem.jsx'
import {Link} from "react-router-dom";
import { Icon } from 'antd';

class ActivitiesList extends Component {
  render() {
    console.log('this.props from activities list:', this.props)
    const activities = this.props.activities.map(activity => {
      return <div className="dayActivities_listBlock">
             <div className="dayActivities_deleteButton">
              <Icon type="minus-circle" />
             </div>
             <Link to={`/${activity.date}/activities/${activity.id}`} >
                <ActivityItem key = {activity.id} {...activity } />
             </Link>
             </div>
    })

    return (
      <main className="dayActivities_activitiesList">
        {activities}
        <div className="dayActivities_addButton">
          <Icon type="plus-circle" />
        </div>
      </main>
    );
  }
}

export default ActivitiesList;
