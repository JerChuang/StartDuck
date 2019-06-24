import React, {Component} from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalender from './TodayActivityCalender.jsx';
import { Icon } from 'antd';

class TodayActivity extends Component {
    handleClick = () => {
        console.log('this is', this);
    }
    render() {
        console.log('this is the props', this.props.activities)
        // const activity = this.props.activities
        return (
            // <TodayActivityBox />                

            <section className="Actvity">
                <div className="todayActivityIcon">
                    <Icon type="schedule" onClick={this.handleClick}/>
                </div>
                <div className="TodayActivityBox">
                    <h2>Activity</h2>
                    <TodayActivityBox activities={this.props.activities} />                
                </div>
                <div>
                    <h2>Calender</h2>
                    <TodayActivityCalender activities={this.props.activities}/>
                </div>
            </section>
        )
    }
}

export default TodayActivity;