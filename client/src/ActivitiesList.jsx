import React, {Component} from 'react';
import ActivityItem from './ActivityItem.jsx'

class ActivitiesList extends Component {

  render() {
    const activities = this.props.activities.map(activity => {
      return <ActivityItem key = {activity.id} color = {this.props.color} {...activity } />    
    })
    const categories = this.props.categories.map(category => {
      return <button className = "dayActivities_categoriesButtons">{category}</button>    
    })

    return (
      <main className="dayActivities_activitiesList">
        <div className = "dayActivities_categories">
          {categories}
        </div>
        <h2>Activities</h2>
        {activities}
      </main>      
    );

    
  }
}

export default ActivitiesList;
