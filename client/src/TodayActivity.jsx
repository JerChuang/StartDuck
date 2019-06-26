import React, { Component } from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalendar from './TodayActivityCalendar.jsx';
import { Icon } from 'antd';
import { Calendar } from 'antd';
import axios from 'axios';

class TodayActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activities: [],
            categories: [],
            email: this.props.email
        };
    }

    componentDidMount() {
        console.log('this is working!', this.props.params)
        axios.get('/api/user_activities/:id', {
          params:{
            email: this.state.email,
            date: this.props.params
          }
        }) // You can simply make your requests to "/api/whatever you want"
        .then((response) => {
          // handle success
          console.log(response.data, 'working ???') // The entire response from the Rails API
    
          this.setState({
            activities: response.data.activities,
            categories: response.data.categories
          });
        })
      }
    
    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <section className="dayActivity">
                <div className="sideBarSchedule">
                    <h3 className="dayHeading">Monday July 2
                    <div className="todayActivityIcon">
                        <Icon style={{ fontSize: '35px' }} type="calendar" onClick={this.handleClick} />
                    </div>
                    </h3>
                    {this.state.active && <Calendar fullscreen={false} className="sidebar_calendar" />}

                    <div className="TodayActivityCalendar">
                        <TodayActivityCalendar activities={this.state.activities} />
                    </div>
                </div>

                <div className="TodayTask">

                    <div className="TodayActivityBox">
                        <TodayActivityBox activities={this.props.activities} />
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
                        <p>
                            oifnawefnaweofinawefoiawnefoia
                            wnefoiojioefmwakmfalwkfnaownf
                            fwaepfjaiwefjj2093ie19idmeiawm
                            iawenfawoiefnawoeifawoeifn
                            awoiefnwoeifnawe
                            fnawoefiawieonfaoi
                        </p>
                    </div>
                </div>

            </section>
        )
    }
}

export default TodayActivity;