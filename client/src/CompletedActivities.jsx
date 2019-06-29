import React, { Component } from 'react'
import axios from 'axios';
import CompletedActivitiesList from './CompletedActivitiesList.jsx';


class CompletedActivities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            categories: [],
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
            console.log('response.dataaaaa', response.data)
          this.setState({
            activities: response.data.activities,
            categories: response.data.categories
          });
        })
      }

    render () {
      console.log('this.state.activitiessssss', this.state.activities.content)
        const categories = this.state.categories.map(category => {
          return <button className = "dayActivities_categoriesButtons">{category}</button>
        })
        return (
         <section className="dayActivities">
         <div>
          <div className="dayActivities_categories">
          {categories}
          </div>
          <h2>Completed Activities</h2>
          <CompletedActivitiesList className="dayActivities_activitiesList" activities = {this.state.activities}/>
         </div>
         </section>
        )
    }

}

export default CompletedActivities