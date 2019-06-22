import React, {Component} from 'react';
import ActivityItem from './ActivityItem.jsx'

class ActivitiesList extends Component {

  render() {
    const activities = this.props.activities.map(activity => {
      return <ActivityItem key = {activity.id} color = {this.props.color} {...activity } />    
    })

    return (
      <main className="activities_list">
        {activities}
      </main>      
    );

    
  }
}

export default ActivitiesList;
