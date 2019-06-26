import React, {Component} from 'react';

const TodayActivityBox = (props) => {
    // console.log('this is from box', this.state)
    // console.log('this is from box', this.props)

    return (

        <div className="todayActivityBox">
            <h1 className="todayActivityTitle">{props.activities[0].name}</h1>
            <span className="todayActivityDuration">{props.activities[0].duration} m</span>
        </div>
    )
}

export default TodayActivityBox