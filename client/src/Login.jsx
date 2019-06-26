import React, { Component } from 'react';
// import { ReactComponent as MainImage } from './images/main.svg';
import main from './images/main.png'
import { Form, Icon, Input, Button} from 'antd';
import axios from 'axios';
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.selectUser(values.email)

        // axios({
        //   method: 'post', 
        //   url: `/`, 
        //   data: {
        //     wishlist: { 
        //       name: 'My New Wishlist'
        //     }
        //   },
        //   headers: {'Authorization': token }
        // })
        // .then(response => {
        //   console.log(response)
        //   this.setState({
        //     wishlists: [response.data, ...this.state.wishlists],
        //     currentWishlistId: response.data.id
        //   })
        // })
        // .catch(error => {
        //   console.log(error)
        // })
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <section className="login-page">
        <div>
          <img src={main} alt ="Main-page"className="main_image" />
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
            <Button htmlType="submit" className="login-page_login-button">
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