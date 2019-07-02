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


  getActivities(){
    axios.get('/api/users/:id', {
      params:{
        email: this.state.email,
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
      return <button id={category.id} className="activities_categoriesButtons" onClick={this.filterCategory}>{category.name}</button>
    })

    return (
      <section className="activities">
      <div>
      <div className="activities_categories">
        {categories}
        <button className="activities_categoriesButtons" onClick={this.allCategories}>All</button>
        </div>
      <h2>Completed Activities</h2>
      <CompletedActivitiesList className="activities_activitiesList" activities = {this.state.filterActivities}/>
      </div>
      </section>
    )
  }
}

export default CompletedActivities
