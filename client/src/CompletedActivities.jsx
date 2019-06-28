import React, { Component } from 'react'

class CompletedActivities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activities: [],
            activity: {},
            categories: [],
            email: this.props.cookies.get('email'),
            completeness: true
        };
    }
    render () {
        console.log('this is the state from completed', this.state)
        console.log('this is the props from completed', this.props.params)
        return (
        <div className="completedpage">
            <span>Status: {this.state.completeness + ""}</span>
        </div>
        )
    }

}




export default CompletedActivities