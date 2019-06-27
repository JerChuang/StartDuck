import React from 'react';

const ActivityItem = (props) => {
    return (
        <div className="dayActivities_activityItem">
          <span className="dayActivities_itemDuration">{props.duration} m</span>
          <span className="dayActivities_itemName">{props.name}</span>     
          <input type="checkbox" disabled={true} checked={props.completeness} />     
        </div>   
    );
}

export default ActivityItem;
