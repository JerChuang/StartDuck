import React from 'react';

const ActivityItem = (props) => {
    return (
        <div className="activityItem">
          <span className="activityItem_duration">{props.duration}</span>
          <span className="activityItem_name">{props.name}</span>          
        </div>   
    );
}

export default ActivityItem;
