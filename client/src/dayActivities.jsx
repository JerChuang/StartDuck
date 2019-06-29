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
      email: this.props.cookies.get('email'),
      date: '',
      redirect: false,
      agenda: [],
    }
  }

  componentDidMount() {
    console.log('did mount')
    this.getActivities();
  }

  componentDidUpdate(prevProps){
    console.log('did update', prevProps)
    if(this.props.params !== prevProps.params){
      console.log('this.props.params:', this.props.params)
      console.log('prevProps.params:', prevProps.params)
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
      console.log('response from getActivities',response)
      this.setState({
        activities: response.data.activities,
        categories: response.data.categories,
        agenda: response.data.agenda
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
    // console.log(value.format('YYYY-MM-DD'))
    const date = value.format('YYYY-MM-DD');
    let style ={
      paddingLeft:"3px",
      opacity:0.5};
    for (let assigned of this.state.agenda){ 
      // console.log(assigned) 
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

  render(){
    console.log('this.props.params from dayActivities', this.props.params)
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
          <Calendar value={moment(this.props.params.day)} onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
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

