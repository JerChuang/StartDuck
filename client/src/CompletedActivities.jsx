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
        axios.get('api/users/:id', {
          params:{
            email: this.state.email
          }
        })
        .then((response) => {
            console.log("response.dataaaa", response.data.activities)
          this.setState({
            // categories: response.data.categories,
            activities: response.data.activities
          });
        })
    }

    render () {
        // const categories = this.state.categories.map(category => {
        //   return <button className = "dayActivities_categoriesButtons">{category}</button>
        // })
        return (
         <section className="dayActivities">
         <div>
          <div className="dayActivities_categories">

          </div>
          <h2>Completed Activities</h2>
          <CompletedActivitiesList className="dayActivities_activitiesList" activities = {this.state.activities}/>
         </div>
         </section>
        )
    }

}

export default CompletedActivities