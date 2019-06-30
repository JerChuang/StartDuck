import React, { Component } from 'react'
import axios from 'axios';
import CompletedActivitiesList from './CompletedActivitiesList.jsx';

class CompletedActivities extends Component {
  constructor(props) {
      super(props);
      this.state = {
          activities: [],
          categories: [],
          filterActivities: [],
          email: this.props.cookies.get('email'),
          // completeness: true
      };
  }

  componentDidMount() {
    this.getActivities();
  }

  componentDidUpdate(prevProps){
    if(this.props.params !== prevProps.params){
      this.getActivities();
    }
  }

<<<<<<< HEAD
      getActivities() {
        axios.get('/api/users/:id', {
          params:{
            email: this.state.email,
          }
        })
        .then((response) => {
            console.log('response.dataaaaa', response.data)
          this.setState({
            activities: response.data.activities,
            categories: response.data.categories
          });
        })
=======
  getActivities(){
    axios.get('/api/users/:id', {
      params:{
        email: this.state.email,
>>>>>>> ccf5030d856f567336c03a5eb20605b7e66a0ea9
      }
    })
    .then((response) => {
      this.setState({
        activities: response.data.activities,
        filterActivities: response.data.activities,
        categories: response.data.categories
      });
    })
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

  render () {
    const categories = this.state.categories.map(category => {
      return <button id={category.id} className="dayActivities_categoriesButtons" onClick={this.filterCategory}>{category.name}</button>
    })

    return (
      <section className="dayActivities">
      <div>
      <div className="dayActivities_categories">
        {categories}  
        <button className="dayActivities_categoriesButtons" onClick={this.allCategories}>All</button>
        </div>
      <h2>Completed Activities</h2>
      <CompletedActivitiesList className="dayActivities_activitiesList" activities = {this.state.filterActivities}/>
      </div>
      </section>
    )
  }
}

export default CompletedActivities
