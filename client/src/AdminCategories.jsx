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
            active: true,

        }
    }


    componentDidMount() {
        this.fetchCategories();
        this.props.form.validateFields();
    }

    fetchCategories = () => {
        axios.get('/api/admin/categories', {})
            .then((response) => {
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

    // create new category and saves in db
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/admin/categories', { name: values.category })
                    .then((response) => {
                        this.fetchCategories();
                        this.props.form.resetFields();

                    })
            }
        });
    };

    render() {

        const categories = this.state.categories.map(category => {
            return <ul className="activitiesList"><span className="activityTitle">
                {category.name}
                </span>
                <span className="activityIcons">

                <Icon id={category.id} 
                    type="delete" 
                    onClick={this.onDelete} 
                    style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.65)' }}
                />
                </span>
            </ul>
        })

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const categoryError = isFieldTouched('category') && getFieldError('category');
        return (
            <div className="adminActivities">
                <div className="existingActivities">
                    <h2 className="adminActivitiesTitle"> Categories List</h2>
                    <ul className="activitiesList">
                        {categories}
                    </ul>
                </div>
                <div className="newActivityForm">
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
                            <Button className="createButton"
                            htmlType="submit" 
                            disabled={hasErrors(getFieldsError())}>
                                Create
                            </Button>
                        </Form.Item>
                    </Form>
                    }
                </div>
                {/* <div className="newCategory">
                    <Icon style={{ fontSize: '32px'}} type="plus-square" className="categoryAddIcon" onClick={this.toggleCategory} />
                </div> */}
            </div>
        )
    }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'creating_category' })(AdminCategories);


export default WrappedHorizontalLoginForm




