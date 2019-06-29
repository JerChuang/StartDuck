import React, { Component } from 'react';
import axios from 'axios';
import { Icon, Form, Input, Button } from 'antd';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class AdminCategories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            active: false,

        }
    }


    componentDidMount() {
        this.fetchCategories();
        this.props.form.validateFields();
    }

    // componentDidUpdate() {
    //     this.clearFields();
    // }

    fetchCategories = () => {
        axios.get('/api/admin/categories', {})
            .then((response) => {
                console.log('responsedata', response.data.categories)
                this.setState({
                    categories: response.data.categories
                })

            })
    }

    // delete an existing category by clicking trash button
    onDelete = (event) => {
        axios.delete(`/api/admin/categories/${event.currentTarget.id}`, {})
            .then((response) => {
                this.fetchCategories()
            })
    }


    // toggles new category form
    toggleCategory = () => {
        this.setState({
            active: !this.state.active
        });
    }

    // //clear fields after submit
    // clearFields = () => {
    //     console.log('this is clearing the field')
    //     this.props.form.resetFields()
    //         // .then((response) => {   
    //         //     this.fetchCategories()
    //         // })
    // }




    // create new category and saves in db
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/admin/categories', { name: values.category })
                    // console.log('this is values',values.category)
                    // console.log('is this reading??')
                    .then((response) => {
                        this.fetchCategories()
                        this.props.form.resetFields()

                    })
            }
        });
    };

    render() {

        const categories = this.state.categories.map(category => {
            return <tr>
                {category.name}
                <Icon id={category.id} type="delete" className="categoryDeleteIcon" onClick={this.onDelete} />
            </tr>
        })

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const categoryError = isFieldTouched('category') && getFieldError('category');
        return (
            <div className="adminCategories">
                <Icon  style={{ fontSize: '32px'}} type="plus-square" className="categoryAddIcon" onClick={this.toggleCategory} />

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

                {this.state.active && <Form layout="inline" onSubmit={this.handleSubmit} >
                    <Form.Item validateStatus={categoryError ? 'error' : ''} help={categoryError || ''}>
                        {getFieldDecorator('category', {
                            rules: [{ required: true, message: 'Please input category!', valuePropName: 'value' }],
                        })(
                            <Input
                                prefix={<Icon type="trophy" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="New Category"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" 
                        htmlType="submit" 
                        disabled={hasErrors(getFieldsError())}>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
                }
            </div>
        )
    }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'creating_category' })(AdminCategories);


export default WrappedHorizontalLoginForm




