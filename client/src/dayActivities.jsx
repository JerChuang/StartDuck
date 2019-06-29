import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
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
      shown: true,
      user_activities_id: []
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
      console.log('response.data.activities', response.data.activities)

      this.setState({
        activities: response.data.activities,
        filterActivities: response.data.activities,
        categories: response.data.categories,
        agenda: response.data.agenda,
        user_activities_id: response.data.user_activities_id

      });
    })
  }

  onSelect = (value) => {
    this.setState({
      date: value.format('YYYY-MM-DD'),
      redirect: true,
    });
  }

  onFullRender = (value) => {
    const date = value.format('YYYY-MM-DD');
    let style ={
      paddingLeft:"3px",
      opacity:0.5};

    for (let assigned of this.state.agenda){
      if(date === assigned) {
        style = {
            background: "lightskyblue",
            border: "1px solid lightcyan",
            fontStyle: "italic",
            fontWeight: "bold",
            paddingLeft: "3px"};
        }
    }
    return <div className="ant-fullcalendar-value" style ={style}>{value.date()}</div>;
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

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render(){

    if(this.state.redirect){
      return (
          <Redirect to={`/${this.state.date}/activities`}/>
      )
    }
    const categories = this.state.categories.map(category => {
      return <button id={category.id} className="dayActivities_categoriesButtons" onClick={this.filterCategory}>{category.name}</button>
    })

    if(this.state.activities.length){
      return (
        <section className="dayActivities">
          <div className="dayActivities_calendar" >
            <Calendar value={moment(this.props.params.day)} onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
          </div>
          <div>
            <div className="dayActivities_categories">
              {categories} <button className="dayActivities_categoriesButtons" onClick={this.allCategories}>All</button>
              <button className = "dayActivities_edit" onClick={this.toggle.bind(this)}>edit</button>
            </div>
            <h2>Activities</h2>
            <ActivitiesList className="dayActivities_activitiesList" shown = {this.state.shown} activities = {this.state.filterActivities}/>
          </div>
        </section>
      )
    } else {
      return (
        <section className="dayActivities">

        <div className="dayActivities_calendar" >
          <Calendar value={moment(this.props.params.day)} onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
        </div>
        <div>
          <h2>No activities planned for the day</h2>
        </div>
      </section>
      )
    }

  }
}
export default withRouter(DayActivities);

