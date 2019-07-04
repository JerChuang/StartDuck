import React, { Component } from 'react';
import { Input, Form, Button } from 'antd';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';



class AdminActivity extends Component {
    state = {
        activity: [],
        textarea: ""
    }
    
    componentDidMount () {
        this.fetchActivity()
    }
    
    fetchActivity = () => {
        axios.get(`/api/admin/activities/${this.props.params.id}`, {})
            .then((response) => {
                this.props.form.setFieldsValue({
                    content:response.data.activity.content,
                    activityName:response.data.activity.name,
                    duration:response.data.activity.duration
              })
                this.setState({
                    activity: response.data.activity,
                    textarea: response.data.activity.content
                })
            })
        }

    onDelete = () => {
        
    }

    handleSubmit = e => {
        e.preventDefault();
        const self = this;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.patch(`/api/admin/activities/${this.props.params.id}`, {
                    name: values.activityName,
                    content: values.content,
                    duration: Number(values.duration),
                    category: self.state.activity.category_id

                })
                    .then((response) => {
                        this.fetchActivity();
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
        const { getFieldDecorator} = this.props.form;
        return (
            <div className="adminActivity">
                <div>
                    
                    <Form labelCol={{ span: 30 }} wrapperCol={{ span: 30 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="Activity Name">
                            <p>{this.state.activity.name}</p>
                            {getFieldDecorator('activityName', {
                                rules: [{ required: true, message: 'Please input activity name!' }],
                            })(<Input style={{width: '350px'}} />)}
                        </Form.Item>
                        <Form.Item label="Duration">
                            <p>{this.state.activity.duration} m</p>
                            {getFieldDecorator('duration', {
                                rules: [{ required: true, message: 'Please input duration!' }],
                            })(<Input style={{width: '350px'}} />)}
                            </Form.Item>
                        <Form.Item label="Content">
                            <ReactMarkdown source={this.state.textarea} />
                            {getFieldDecorator('content', {
                                rules: [{ required: true, message: 'Please input content!' }],
                            })(<Input.TextArea style={{width: '350px'}} onChange={this.changeContent} rows={10}/>)}    
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button className="createButton" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                    </Form>
                    
                </div>
            </div>
        )
    }
}
const WrappedAdminActivity = Form.create({ name: 'coordinated' })(AdminActivity);
export default WrappedAdminActivity 

