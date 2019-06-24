import React, {Component} from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalender from './TodayActivityCalender.jsx';
import { Icon } from 'antd';
import { Calendar } from 'antd';

class TodayActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
        };
    }

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        console.log('this is the props', this.props.activities)
        // const activity = this.props.activities
        return (
            // <TodayActivityBox />                

            <section className="Actvity">
                <div className="todayActivityIcon">
                    <Icon type="schedule" onClick={this.handleClick}/>
                    {this.state.active && <Calendar fullscreen={false} className="dayActivities_calendar"/>}
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