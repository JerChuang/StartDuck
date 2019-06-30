import React, {Component} from 'react';
import ActivityItem from './ActivityItem.jsx'
import {Link} from "react-router-dom";
import { Icon } from 'antd';
import axios from 'axios';


class ActivitiesList extends Component {
  state = {
    email: this.props.cookies.get('email'),
  }

  onDelete = (event) => {
        console.log("event.currentTarget.id", event.currentTarget.id)
        axios.delete(`/api/user_activities/${event.currentTarget.id}`, {
        id: event.currentTarget.id
      })
        .then(response => {
          this.props.handleRefresh()
        })
      }

  render() {
    var shown = {
      display: this.props.shown ? "block" : "none"
    };
    var hidden = {
      display: this.props.shown ? "none" : "block"
    }

    console.log('this.props from activities list:', this.props)
    const activities = this.props.activities.map(activity => {
      console.log("activityyyyyyyyyyysjidjiajdoisj", activity)
      return <div className="dayActivities_listBlock">
             <div className="dayActivities_deleteButton">
              <Icon id={activity.user_activities_id} onClick = {this.onDelete} style={ shown } type="minus-circle" />
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
          <Icon style={ shown } type="plus-circle" />
        </div>
      </main>
    );
  }
}

export default ActivitiesList;
