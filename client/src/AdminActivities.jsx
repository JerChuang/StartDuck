import React, { Component } from 'react';
import { Icon, Form, Select, Input, Button } from 'antd';
import axios from 'axios';

const { Option } = Select;
class AdminActivities extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: [],
            active: false,
        }
    }

    componentDidMount() {
        this.fetchActivities()
    }

    //receives data from backend
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

        return (
            <div className="adminActivities">

                <Icon style={{ fontSize: '32px' }} type="plus-square" className="activityAddIcon" onClick={this.toggleActivity} />

                {this.state.active && <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Note">
                        {getFieldDecorator('note', {
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Gender">
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Select
                                placeholder="Select a option and change input text above"
                                onChange={this.handleSelectChange}
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                            </Select>,
                        )}
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
