import React from 'react';
import { Redirect} from "react-router-dom";
// import ReactDom from 'react-dom';
import { Calendar} from 'antd';
import ActivitiesList from './ActivitiesList.jsx';
import axios from 'axios';
import * as moment from 'moment';

class DayActivities extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      activities: [],
      categories: [],
      filterActivities:[],
      email: this.props.cookies.get('email'),
      date: '',
      redirect: false,
      agenda: [],
    }
  }

  componentDidMount() {
    // console.log('did mount')
    this.getActivities();
  }

  componentDidUpdate(prevProps){
    // console.log('did update', prevProps)
    if(this.props.params !== prevProps.params){
      this.getActivities();
    }
    if (this.state.redirect){
      this.setState({redirect:false})
    }
  }

  getActivities(){
    axios.get('/api/user_activities', {
      params:{
        email: this.state.email,
        date: this.props.params
      }
    })
    .then((response) => {
      // console.log('response.data.activities', response.data.activities)
      // console.log('response.data.categories', response.data.categories)
      this.setState({
        activities: response.data.activities,
        filterActivities: response.data.activities,
        categories: response.data.categories,
        agenda: response.data.agenda,
        
      });
    })
  }

  onSelect = (value) => {
    console.log('value for calendar', value)
    this.setState({
      date: value.format('YYYY-MM-DD'),
      redirect: true,
    });
  }

  onFullRender = (value) => {
    const date = value.format('YYYY-MM-DD');
    let style ="activities_calendarNotScheduled";

    for (let assigned of this.state.agenda){
      if(date === assigned) {
        style = "activities_calendarScheduled";
        }
    }
    return <div className={`ant-fullcalendar-value ${style}`}>{value.date()}</div>;
  }

  filterCategory = (event) => {
    this.setState({
      filterActivities: this.state.activities.filter(
        activity => {
          return activity.category_id === Number(event.currentTarget.id)
        }),
    })
  }

  allCategories = () => {
    this.setState({
      filterActivities: this.state.activities
    })
  }


  render(){
    if(this.state.redirect){
      return (
          <Redirect to={`/${this.state.date}/activities`}/>
      )
    }
    const categories = this.state.categories.map(category => {
      return <button id={category.id} className="activities_categoriesButtons" onClick={this.filterCategory}>{category.name}</button>
    })

    if(this.state.activities.length){
      return (
        <section className="activities">
          <div className="activities_left">
            <h2>{moment().format('dddd, MMMM Do YYYY')}</h2>
            <div  className="activities_calendar" >
              <Calendar value={moment(this.props.params.day)} onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
            </div>
          </div>

          <div className="activities_right">
            <h2>Activities</h2>
            <div className="activities_categories">
              {categories}
              <button className="activities_categoriesButtons" onClick={this.allCategories}>All</button>
              <button className = "activities_edit">edit</button>
            </div>
            <ActivitiesList className="activities_activitiesList" activities = {this.state.filterActivities}/>
          </div>
        </section>
      )
    } else {
      return (
        <section className="activities">
          <div className="activities_left">
            <h2>{moment().format('dddd, MMMM Do YYYY')}</h2>
            <div className="activities_calendar" >
              <Calendar value={moment(this.props.params.day)} onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
            </div>
          </div>
          <div className="activities_right">
            <h2>No activities planned for the day</h2>
          </div>
      </section>
      )
    }

  }
}
export default DayActivities;

