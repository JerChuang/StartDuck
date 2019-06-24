import React, {Component} from 'react';
import TodayActivityBox from './TodayActivityBox.jsx'

const TodayActivityCalender = (props) => {
    return (
        <div className="dayActivities_activityItem">
            <span className="todayActivityTitle">{props.name}</span>     
            <span className="todayActivityDuration">{props.duration} m</span>
        </div>
    )
}
// class TodayActivityCalender extends Component {
//     render() {
//       const activities = this.props.activities.map(activity => {
//         return <TodayActivityBox key = {activity.id} color = {this.props.color} {...activity } />    
//       })
  
//       return (
//         <main className="dayActivities_activitiesList">
//           {activities}
//         </main>      
//       );
//     }
//   }

export default TodayActivityCalender
