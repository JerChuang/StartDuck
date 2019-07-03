import React, { Component } from 'react';
import { Icon, Form, Select, Input, Button } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import {Link, Redirect} from "react-router-dom";

const { Option } = Select;
class AdminActivities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            categories: [],
            active: true,
            textarea:""
        }
    }

    componentDidMount() {
        this.fetchCategories();
        this.fetchActivities();
    }

    // recevies categories
    fetchCategories = () => {
        axios.get('/api/admin/categories', {})
            .then((response) => {
                this.setState({
                    categories: response.data.categories
                })

            })
    }


    //receives activities from backend
    fetchActivities = () => {
        axios.get('/api/admin/activities', {})
            .then((response) => {
                this.setState({
                    activities: response.data.activities
                })
            })
    }

    // delete an exisiting activity by clicking trash button
    onDelete = (event) => {
        axios.delete(`/api/admin/activities/${event.currentTarget.id}`, {})
            .then((response) => {
                this.fetchActivities()
            })
    }
    
    // toggles new activity form
    toggleActivity = () => {
        this.setState({
            active: !this.state.active
        });
    }


    handleSubmit = e => {
        e.preventDefault();
        const self = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/admin/activities', {
                    name: values.activityName,
                    content: values.content,
                    duration: Number(values.duration),
                    category: values.category
                })
                    .then((response) => {
                        this.fetchActivities();
                        this.props.form.resetFields();
                        self.setState({textarea:""})
                    })
            }
        });
    };

    changeContent = event => {
        this.setState({
            textarea:event.target.value,
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const activities = this.state.activities.map(activity => {
            return <ul className="activitiesList"><span className="activityTitle">
                {activity.name}
                </span>
                <span className="activityIcons">
                <Link to={`/admin/activities/${activity.id}`} >
                <Icon id={activity.id} 
                    type="edit" 
                    className="activityEditIcon" 
                    style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }} 
                />
                   </Link>
               
                <Icon id={activity.id} 
                    type="delete" 
                    className="activityDeleteIcon" 
                    onClick={this.onDelete} 
                    style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }}
                />
                </span>
                </ul>
        })
        const categories = this.state.categories.map(category => {
            return <Option value={category.id}>{category.name}</Option>
        })

        return (
            <div className="adminActivities">
                <div className="existingActivities">
                    <h2 className="adminActivitiesTitle"> Activity List</h2>
                        <ul className="activitiesList">
                            {activities}
                        </ul>
                </div>
                {/* <div className="newActivity">
                    <Icon style={{ fontSize: '32px' }} type="plus-square" className="activityAddIcon" onClick={this.toggleActivity} />
                </div> */}
                <div className="newActivityForm">
                    {this.state.active && <Form labelCol={{ span: 30 }} wrapperCol={{ span: 30 }} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('activityName', {
                                rules: [{ required: true, message: 'Please input activity name!' }],
                            })(
                                <Input
                                    prefix={<Icon type="trophy" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Activity Name"
                                    style={{width: '300px'}}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('category', {
                                rules: [{ required: true, message: 'Please select category!' }],
                            })(
                                <Select placeholder="Select a category" style={{width: '300px'}}
                                >
                                    {categories}
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('duration', {
                                rules: [{ required: true, message: 'Please input duration!' }],
                            })(
                                <Input 
                                prefix={<Icon type="dashboard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Duration in minutes"
                                style={{width: '300px'}}
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <ReactMarkdown source={this.state.textarea} />
                            {getFieldDecorator('content', {
                                rules: [{ required: true, message: 'Please input content!' }],
                            })(
                                <Input.TextArea 
                                onChange={this.changeContent} 
                                rows={10}
                                style={{width: '300px'}}                            
                                placeholder="Content"
                                />
                            )}
                            
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                            <Button className="createButton" htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                    }
                </div>
            </div>
        )
    }
}

const WrappedApp = Form.create({ name: 'coordinated' })(AdminActivities);

export default WrappedApp
