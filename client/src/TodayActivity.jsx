import React, {Component} from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalendar from './TodayActivityCalendar.jsx';
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
        return (
            <section className="Actvity">
                <h3>Monday July 2</h3>
                <div className="todayActivityIcon">
                    <Icon type="schedule" onClick={this.handleClick}/>
                    {this.state.active && <Calendar fullscreen={false} className="dayActivities_calendar"/>}
                </div>
                <div className="TodayActivityBox">
                    <h2>Activity</h2>
                    <TodayActivityBox activities={this.props.activities} />                
                </div>
                <div className="TodayActivityCalendar">
                    <h2>Calendar</h2>
                    <TodayActivityCalendar activities={this.props.activities}/>
                </div>
                <div className="Completeness">
                    <span>Status: Incomplete</span>
                </div>
                <div className="TodayContent">
                    <p>
                        This is some hardcoded content!
                        eklfjalekfalwkefnawifnweafnewa
                    </p>
                    <p>
                        oifnawefnaweofinawefoiawnefoia
                        wnefoiawenfawoiefnawoeifawoeifn
                        awoiefnwoeifnawe
                        fnawoefiawieonfaoi
                    </p>
                </div>
            </section>
        )
    }
}

export default TodayActivity;