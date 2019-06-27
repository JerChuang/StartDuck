import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
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
      email: this.props.cookies.get('email'),
      date: '',
      redirect: false,
    }
  }

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps){
    if(this.props.params !== prevProps.params){
      console.log('this.props.params:', this.props.params)
      console.log('prevProps.params:', prevProps.params)
      this.getData();
    }
    if (this.state.redirect){
      this.setState({redirect:false})
    }
  }
  getData(){
    axios.get('/api/user_activities', {
      params:{
        email: this.state.email,
        date: this.props.params
      }
    }) 
    .then((response) => {
      this.setState({
        activities: response.data.activities,
        categories: response.data.categories,
      });
    })
  }

  onSelect = (value) => {
    this.setState({
      date: value.format('YYYY-MM-DD'),
      redirect: true,
    });
  }
  render(){
    // console.log('this.props from dayActivities', this.props)
    // console.log('this.state from dayActivities', this.state)
    if(this.state.redirect){
   
      return (
          <Redirect to={`/${this.state.date}/activities`}/>
      )
    } 
    const categories = this.state.categories.map(category => {
      return <button className = "dayActivities_categoriesButtons">{category}</button>    
    })
    return (
      <section className="dayActivities">
        <div className="dayActivities_calendar" >
          <Calendar onSelect={this.onSelect} fullscreen={false}/>
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
export default withRouter(DayActivities);
