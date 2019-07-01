import React, { Component } from 'react';
import { Input, Form } from 'antd';
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
                console.log('responsedata',response.data)
                this.props.form.setFieldsValue({
                    content:response.data.activity.content,
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
                console.log('Received values of form: ', values);
                // axios.post('/api/admin/activities', {
                //     name: values.activityName,
                //     content: values.content,
                //     duration: Number(values.duration),
                //     category: values.category
                // })
                //     .then((response) => {
                //         this.fetchActivities();
                //         this.props.form.resetFields();
                //         self.setState({textarea:""})
                //     })
            }
        });
    };

    changeContent = event => {
        this.setState({
            textarea:event.target.value,
        })
    }

    render() {
        console.log(this.state.textarea)
        const { getFieldDecorator} = this.props.form;
        return (
            <div className="adminActivity">
                <div>
                    <p>{this.state.activity.name}</p>
                    <p>{this.state.activity.duration} m</p>
                    {/* <ReactMarkdown source={this.state.activity.content} /> */}
                    <Form labelCol={{ span: 30 }} wrapperCol={{ span: 30 }} onSubmit={this.handleSubmit}>
                        <Form.Item label="Content">
                            <ReactMarkdown source={this.state.textarea} />
                            {getFieldDecorator('content', {
                                rules: [{ required: true, message: 'Please input content!' }],
                            })(<Input.TextArea onChange={this.changeContent} rows={10}/>)}    
                        </Form.Item>
                    </Form>
                    
                </div>
            </div>
        )
    }
}
const WrappedAdminActivity = Form.create({ name: 'coordinated' })(AdminActivity);
export default WrappedAdminActivity 

