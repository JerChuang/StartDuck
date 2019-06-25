import React, { Component } from 'react';
import { ReactComponent as MainImage } from './images/main.svg';
import {Link} from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="login-page">
        <div>
          <MainImage className="main_image" />
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <h1>Manage your time with us!</h1>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail address"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button className="login-page_login-button" type="submit">
              Log in
            </Button>     
          </Form.Item>
        </Form>
      </section>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;



// class NormalLoginForm extends React.Component {
  

  
// }


// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);