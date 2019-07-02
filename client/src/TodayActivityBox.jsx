import React from 'react';

const TodayActivityBox = (props) => {

    return (
        <div className="todayActivityBox">
            <h1 className="todayActivityTitle">{props.activity.name}</h1>
            <h6 className="todayActivityDuration">{props.activity.duration} m</h6>
        </div>
    )
}

export default TodayActivityBox;
