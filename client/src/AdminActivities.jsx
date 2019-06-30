import React, { Component } from 'react';
import { Icon, Form, Select, Input, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;
class AdminActivities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            categories: [],
            active: false,
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


    // toggles new activity form
    toggleActivity = () => {
        this.setState({
            active: !this.state.active
        });
    }


    handleSubmit = e => {
        e.preventDefault();
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

                    })
            }
        });
    };

    handleSelectChange = value => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    render() {
        console.log('thestate', this.state)
        const { getFieldDecorator } = this.props.form;
        const activities = this.state.activities.map(activity => {
            return <tr>
                {activity.name}
                <Icon type="edit" />
                <Icon id={activity.id} type="delete" className="activityDeleteIcon" onClick={this.onDelete} />
            </tr>
        })
        const categories = this.state.categories.map(category => {
            return <Option value={category.id}>{category.name}</Option>
        })
console.log('this is the list of categories',categories);
        return (
            <div className="adminActivities">

                <Icon style={{ fontSize: '32px' }} type="plus-square" className="activityAddIcon" onClick={this.toggleActivity} />

                {this.state.active && <Form labelCol={{ span: 30 }} wrapperCol={{ span: 30 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Activity Name">
                        {getFieldDecorator('activityName', {
                            rules: [{ required: true, message: 'Please input activity name!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Category">
                        {getFieldDecorator('category', {
                            rules: [{ required: true, message: 'Please select category!' }],
                        })(
                            <Select
                                placeholder="Select a category"
                                // onChange={this.handleSelectChange}
                            >
                                {categories}
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="Duration">
                        {getFieldDecorator('duration', {
                            rules: [{ required: true, message: 'Please input duration!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Content">
                        {getFieldDecorator('content', {
                            rules: [{ required: true, message: 'Please input content!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                }
                <table className="tableAdminActivities">
                    <thead>
                        <tr>
                            <th colSpan="2">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities}
                    </tbody>
                </table>




            </div>
        )
    }
}

const WrappedApp = Form.create({ name: 'coordinated' })(AdminActivities);

export default WrappedApp
