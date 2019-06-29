import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
class AdminActivity extends Component {
    state = {
        activity: [],
    }
    
    componentDidMount () {
        this.fetchActivity()
    }
    
    fetchActivity = () => {
        axios.get('/api/admin/activities', {})
            .then((response) => {
                console.log('responsedata',response.data)
                this.setState({
                    activities: response.data.activities
                })
            })
        }

    onDelete = () => {
        
    }


    render() {
        console.log('theprops',this.props)
        const activity = this.state.activity.map(category => {
        return <tr>
        {category.name} 
        <Icon type="edit" /> 
        <Icon type="delete" className="categoryDeleteIcon" onClick={this.onDelete} />
        </tr>   
        })
        return (
            <div className="adminActivities">

                <table className="tableAdminActivities">
                    <thead>
                        <tr>
                        <th colSpan="2">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activity}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default AdminActivity

