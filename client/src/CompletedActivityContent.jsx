import React, { Component } from 'react';
import TodayActivityBox from './TodayActivityBox.jsx';
import { Icon } from 'antd';
import { Calendar } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import TodayActivityCalendar from './TodayActivityCalendar.jsx';

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
    // this.checkCompleteness();

    }

    componentDidUpdate (prevProps) {
        const activityID = this.props.params.activityID
        console.log('prevPROPS',prevProps.params.activityID)

        if (prevProps.params.activityID !== activityID) {
            console.log('currentprops', activityID)
      this.fetchActivity(activityID);
      // this.checkCompleteness();
        }
    }

    fetchActivity = (activityID) => {
        axios.get('/api/users/:id', {
            params: {
                email: this.state.email,
            }
        }) // You can simply make your requests to "/api/whatever you want"
            .then((response) => {
            console.log('this is responseeee',response.data.activities)
                // handle success
                const activity = response.data.activities.find(element => {
                    return element.id == this.props.params.id;
                })
                console.log('activityyyyyy', this.props.params.id)
                this.setState({
                    activities: response.data.activities,
                    activity: activity
                });
            })
    }


    render() {
        console.log('djwiushdohasudhhuihasdas', this.state.activity)

    console.log('this is markdown',this.state.markdown)

    console.log('this is state.completenesss', this.state.completeness)
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



