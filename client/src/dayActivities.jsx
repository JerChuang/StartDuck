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
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar className="dayActivities_calendar" fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
        <ActivitiesList className="dayActivities_activitiesList" activities = {this.props.activities} />
      </section>
    )
  }
}
export default dayActivities;
