import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
class AdminActivities extends Component {
    state = {
        activities: [],
    }
    
    componentDidMount () {
        this.fetchCategories()
    }
    
    fetchCategories = () => {
        axios.get('/api/admin/categories', {})
            .then((response) => {
                console.log('responsedata',response.data)
                this.setState({
                    categories: response.data.categories
                })
            })
        }

    onDelete = () => {
        
    }


    render() {
        console.log('thestate',this.state.categories)
        const categories = this.state.categories.map(category => {
        return <tr>
        {category.name} 
        <Icon type="edit" /> 
        <Icon type="delete" className="categoryDeleteIcon" onClick={this.onDelete} />
        </tr>   
        })
        return (
            <div className="adminCategories">

                <table className="tableAdminCategories">
                    <thead>
                        <tr>
                        <th colSpan="2">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default AdminActivities

