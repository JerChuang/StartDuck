import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import ReactDom from 'react-dom';
import { Calendar } from 'antd';
import ActivitiesList from './ActivitiesList.jsx';
import axios from 'axios';

class DayActivities extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activities: [],
      categories: [],
      email: this.props.email
    }
  }

  componentDidMount() {
    console.log(this.props.params)
    axios.get('/api/user_activities', {
      params:{
        email: this.state.email,
        date: this.props.params
      }
    }) // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      this.setState({
        activities: response.data.activities,
        categories: response.data.categories
      });
    })
  }

 
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  render(){
    console.log('this.props from dayActivities', this.props)
    console.log('this.state from dayActivities', this.state)
    const categories = this.state.categories.map(category => {
      return <button className = "dayActivities_categoriesButtons">{category}</button>    
    })
    return (
      <section className="dayActivities">
        <div className="dayActivities_calendar" >
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
        <div>
          <div className="dayActivities_categories">
            {categories}
            <button className = "dayActivities_edit">edit</button>
          </div>
          <h2>Activities</h2>
          <ActivitiesList className="dayActivities_activitiesList" activities = {this.state.activities}/>
        </div>
      </section>
    )
  }
}
export default DayActivities;
