import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
class AdminCategories extends Component {
    state = {
        categories: [],
    }
    
    componentDidMount () {
        this.fetchCategories()
    }
    
    fetchCategories = () => {
        axios.get('/api/admin/categories', {})
            .then((response) => {
                console.log('responsedata',response.data.categories)
                this.setState({
                    categories: response.data.categories
                })
        
            })
        }

    onDelete = (event) => {
        axios.delete(`/api/admin/categories/${event.currentTarget.id}`, {})
            .then((response) => {
                console.log('this is from delete',event.currentTarget.id)
            })
    }

    onAdd = () => {
        axios.post('/api/admin/categories', {})
            .then((response) => {
                console.log('this is added', response)
            })
    }

    render() {
        console.log('this is from params',this.props.params)
        const categories = this.state.categories.map(category => {
        return <tr>
        {category.name} 
        <Icon type="edit" /> 
        <Icon id={category.id} type="delete" className="categoryDeleteIcon" onClick={this.onDelete} />
        </tr>   
        })
        return (
            <div className="adminCategories">
            <Icon type="plus-square" className="categoryAddIcon" onClick={this.onAdd} />

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

export default AdminCategories

