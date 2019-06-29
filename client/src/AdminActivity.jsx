import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';


class AdminActivity extends Component {
    state = {
        activity: [],
    }
    
    componentDidMount () {
        this.fetchActivity()
    }
    
    fetchActivity = () => {
        axios.get(`/api/admin/activities/${this.props.params.id}`, {})
            .then((response) => {
                console.log('responsedata',response.data)
                
                this.setState({
                    activity: response.data.activity
                })
            })
        }

    onDelete = () => {
        
    }


    render() {
        return (
            <div className="adminActivity">

                <div>
                    <p>{this.state.activity.name}</p>
                    <p>{this.state.activity.duration} m</p>
                    <ReactMarkdown source={this.state.activity.content} />
                </div>

            </div>
        )
    }
}

export default AdminActivity

