import React, { Component } from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import TodayActivityCalendar from './TodayActivityCalendar.jsx';
import { Icon } from 'antd';
import { Calendar } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import WelcomeMd
console.log(ReactMarkdown);

class TodayActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activities: [],
            activity: {},
            categories: [],
			email: this.props.cookies.get('email'),
			markdown: ''
        };
    }

    componentDidMount() {
		this.fetchActivity(this.props.params.activityID);
		this.checkCompleteness();
    }

    componentDidUpdate (prevProps) {
        const activityID = this.props.params.activityID
        if (prevProps.params.activityID !== activityID) {
			this.fetchActivity(activityID);
			this.checkCompleteness();
        }
    } 

    fetchActivity = (activityID) => {
        axios.get('/api/user_activities/:id', {
            params: {
                email: this.state.email,
                date: this.props.params
            }
        }) // You can simply make your requests to "/api/whatever you want"
            .then((response) => {
                // handle success
                const activity = response.data.activities.find(element => {
                    return element.id == this.props.params.activityID;
                })
                this.setState({
                    activities: response.data.activities,
                    categories: response.data.categories,
					activity: activity
		
                });
            })
    }
    // toggle calender
    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
	}
	
	checkCompleteness = () => {
		if (this.state.activity.completeness) {
			this.setState({
				completeness: "Completed"
			})
		}
		else {
			this.setState({
				completeness: "Incomplete"
			})
		}		
	}


    render() {
		
		console.log('this is state.completenesss', this.state.completeness)
        return (
            <section className="dayActivity">
                <div className="sideBarSchedule">
                    <h3 className="dayHeading">{this.props.params.day}
                    <div className="todayActivityIcon">
                            <Icon style={{ fontSize: '35px' }} type="calendar" onClick={this.handleClick} />
                        </div>
                    </h3>
                    {this.state.active && <Calendar fullscreen={false} className="sidebar_calendar" />}

                    <div className="TodayActivityCalendar">
                        <TodayActivityCalendar activities={this.state.activities} params={this.props.match.params}/>
                    </div>
                </div>

                <div className="TodayTask">

                    <div className="TodayActivityBox">
                        <TodayActivityBox activity={this.state.activity} />
                    </div>
                    <div className="Completeness">
                        <span>Status: {this.state.completeness}	</span>
                    </div>
                    <div className="TodayContent">
                        <p>{this.state.activity.content} </p>
                    </div>
                </div>

            </section>
        )
    }
}

export default TodayActivity;