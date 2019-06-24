import React, {Component} from 'react';

const TodaySchedule = (props) => {
    return (
        <div className="dayActivities_activityItem">
          <span className="dayActivities_itemName">{props.name}</span>     
          <input type="checkbox" disabled={true} checked="checked" />   
        </div>
    )
}

export default TodaySchedule