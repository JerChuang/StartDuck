import React from 'react';


const TodayActivityBox = (props) => {
    console.log(props.params,'params from box')

    return (

        <div className="todayActivityBox">
            <h1 className="todayActivityTitle">{props.activity.name}</h1>
            <span className="todayActivityDuration">{props.activity.duration} m</span>
        </div>
    )
}


export default TodayActivityBox