import React, { Component } from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

class CompletedActivityContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activities: [],
            activity: {},
            categories: [],
            email: this.props.cookies.get('email')
        };
    }

    componentDidMount() {
        this.fetchActivity(this.props.params.id);
    }

    componentDidUpdate (prevProps) {
        const activityID = this.props.params.activityID

        if (prevProps.params.activityID !== activityID) {
            this.fetchActivity(activityID);
        }
    }

    fetchActivity = (activityID) => {
        axios.get('/api/users/:id', {
            params: {
                email: this.state.email,
            }
        }) 
            .then((response) => {
                const activity = response.data.activities.find(element => {
                    return element.id === Number(this.props.params.id);
                })
                this.setState({
                    activities: response.data.activities,
                    activity: activity
                });
            })
    }

    render() {
        return (
            <section className="dayActivity">
                <div className="TodayTask">
                    <div className="TodayActivityBox">
                        <TodayActivityBox activity={this.state.activity} />
                    </div>
                    <div className="Completeness">
                        <span>Status: Completed </span>
                    </div>
                    <div className="TodayContent">
                        <ReactMarkdown source={this.state.activity.content} />
                    </div>
                </div>
            </section>
        )
    }
}
export default CompletedActivityContent;
