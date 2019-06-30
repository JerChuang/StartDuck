import React from 'react';

const TodayActivityBox = (props) => {

    return (
        <div className="todayActivityBox">
            <h1 className="todayActivityTitle">{props.activity.name}</h1>
            <span className="todayActivityDuration">{props.activity.duration} m</span>
        </div>
    )
}

export default TodayActivityBox;
