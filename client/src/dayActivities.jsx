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
    const categories = this.props.categories.map(category => {
      return <button className = "dayActivities_categoriesButtons">{category}</button>    
    })
    return(
      <section className="dayActivities">
        <div className="dayActivities_calendar" >
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />    
        </div>
        <div>
          <div className = "dayActivities_categories">
            {categories}
            <botton className = "dayActivities_edit">edit</botton>
          </div>
          <h2>Activities</h2>
          <ActivitiesList className="dayActivities_activitiesList" activities = {this.props.activities} categories = {this.props.categories} />
        </div>
      </section>
    )
  }
}
export default dayActivities;
