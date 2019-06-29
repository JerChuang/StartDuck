import React, { Component } from 'react'

class CompletedActivities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activities: [],
            activity: {},
            categories: [],
            email: this.props.cookies.get('email'),
            completeness: true
        };
    }

    componentDidMount() {
      this.getComplete()
    }
    componentDidUpdate(prevProps){
      if(this.props.params !== prevProps.params){
        this.getComplete();
      }
    }

    getComplete(){
      axios.get('/api/users/:id', {
        params:{
          email: this.state.email
        }
      })
      .then((response) => {
          console.log("response.dataaaa", response.data)
        this.setState({
          // categories: response.data.categories,
          activities: response.data.activities
        });
      })
    }


    render () {
        console.log('this is the state from completed', this.state)
        console.log('this is the props from completed', this.props.params)
        return (
        <div className="completedpage">
            <span>Status: {this.state.completeness + ""}</span>
        </div>
        )
    }

}




export default CompletedActivities