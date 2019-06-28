import React from 'react';
import { Redirect, withRouter } from "react-router-dom";
// import ReactDom from 'react-dom';
import { Calendar, Badge } from 'antd';
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

  getListData(value) {
    let listData;
    // switch (value.date()) {
    //   case 8:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event.' },
    //     ];
    //     break;
    //   case 10:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event.' },
    //     ];
    //     break;
    //   case 15:
    //     listData = [
    //       { type: 'warning', content: 'This is warning event' },     
    //     ];
    //     break;
    //   default:
    // }
    return listData || [];
  }

  dateCellRender= (value) => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  onFullRender(value){
    console.log(value.format('YYYY-MM-DD'))
    const date = value.format('YYYY-MM-DD');
    let style;
    if(date === '2019-06-22') {
     style = { background: "blue"};
    }
    return <div className="ant-fullcalendar-value" style ={style}>{value.date()}</div>;
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
          <Calendar onSelect={this.onSelect} dateFullCellRender={this.onFullRender} fullscreen={false}/>
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
