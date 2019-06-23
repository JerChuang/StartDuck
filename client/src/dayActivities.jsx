import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import ReactDom from 'react-dom';
import { Calendar } from 'antd';
import ActivitiesList from './ActivitiesList.jsx';



class dayActivities extends React.Component{
 
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  render(){
    console.log('this.props for dayActivities', this.props)
    return(
      <section className="dayActivities">
        <div className="dayActivities_calendar" >
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />    
        </div>
        <ActivitiesList className="dayActivities_activitiesList" activities = {this.props.activities} categories = {this.props.categories} />
      </section>
    )
  }
}
export default dayActivities;
