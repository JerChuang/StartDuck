import React, {Component} from 'react';

const TodayActivityBox = (props) => {

    return (
        <div className="todayActivityBox">
            <span className="todayActivityTitle">{props.activities[0].name}</span>
            <span className="todayActivityDuration">{props.activities[0].duration} m</span>
        </div>
    )
}

export default TodayActivityBox