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
            active: false,
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
                console.log('responsedata', response.data.categories)
                this.setState({
                    categories: response.data.categories
                })

            })
    }


    //receives activities from backend
    fetchActivities = () => {
        axios.get('/api/admin/activities', {})
            .then((response) => {
                console.log('responsedata', response.data)
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

    onEdit = (event) => {
    //     // axios.get(`/api/admin/activities/${event.currentTarget.id}`)
    //     console.log(event.currentTarget.id);
    //     //     .then((response => {
    //             <Link to={`/admin/activities/${event.currentTarget.id}`} />
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
                console.log('Received values of form: ', values);
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
        console.log('thestate', this.state)
        const { getFieldDecorator } = this.props.form;
        const activities = this.state.activities.map(activity => {
            return <ul>
                {activity.name}
                <Icon id={activity.id} type="edit" className="activityEditIcon"  onClick={this.onEdit} >
                   <Link to={`/admin/activities/${activity.id}`} />
                </Icon>
                <Icon id={activity.id} type="delete" className="activityDeleteIcon" onClick={this.onDelete} />
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
                <div className="newActivityForm">
                    {this.state.active && <Form labelCol={{ span: 30 }} wrapperCol={{ span: 30 }} onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('activityName', {
                                rules: [{ required: true, message: 'Please input activity name!' }],
                            })(
                                <Input
                                    prefix={<Icon type="trophy" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Activity Name"

                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('category', {
                                rules: [{ required: true, message: 'Please select category!' }],
                            })(
                                <Select placeholder="Select a category" style={{width: '190px'}}
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
                                style={{width: '190px'}}                            
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
                <div className="newActivity">
                    <Icon style={{ fontSize: '32px' }} type="plus-square" className="activityAddIcon" onClick={this.toggleActivity} />
                </div>
            </div>
        )
    }
}

const WrappedApp = Form.create({ name: 'coordinated' })(AdminActivities);

export default WrappedApp
