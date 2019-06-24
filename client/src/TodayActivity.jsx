import React, {Component} from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalender from './TodayActivityCalender.jsx';
// const x = todayActivityBox


class TodayActivity extends Component {
    render() {
        console.log('this is the props', this.props.activities)
        // const activity = this.props.activities
        return (
            // <TodayActivityBox />                

            <section className="Actvity">
                <div className="TodayActivityBox">
                    <h2>Activity</h2>
                    <TodayActivityBox activities={this.props.activities} />                
                </div>
                {/* <div>
                    <h2>Calender</h2>
                    <TodayActivityCalender activities={this.props.activities}/>
                </div> */}
            </section>
        )
    }
}

export default TodayActivity;