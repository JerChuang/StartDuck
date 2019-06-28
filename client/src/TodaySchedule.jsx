import React from 'react';

const TodaySchedule = (props) => {
  console.log('is this loading from today schedule?',props,' from today schedule');
    return (
        <div className="todayActivityItem">
          <span className="dayActivities_itemName">{props.name}</span>
          <input type="checkbox" disabled={true} checked={props.completeness} />
        </div>
    )
}

export default TodaySchedule