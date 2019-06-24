import React from 'react';

const ActivityItem = (props) => {
  console.log('props from activity item', props)
    return (
        <div className="dayActivities_activityItem">
          <span className="dayActivities_itemDuration">{props.duration} m</span>
          <span className="dayActivities_itemName">{props.name}</span>     
          <input type="checkbox" disabled={true} checked="checked" />     
        </div>   
    );
}

export default ActivityItem;
