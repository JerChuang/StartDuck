import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Form, DatePicker, Button } from 'antd';
import TimePicker123 from './TimePicker.jsx';
import Schedule from './schedule.jsx';
import axios from 'axios';
import { Redirect } from 'react-router'

class datePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hours_per_day: 0,
      categories: [],
      start_date: null,
      end_date: null,
      endOpen: false,
      redirect: false
    }
  };

  disabledStartDate = start_date => {
    const { end_date } = this.state;
    if (!start_date || !end_date) {
      return false;
    }
    return start_date.valueOf() > end_date.valueOf();
  };

  disabledEndDate = end_date => {
    const { start_date } = this.state;
    if (!end_date || !start_date) {
      return false;
    }
    return end_date.valueOf() <= start_date.valueOf();
  };

  onChange = (field, value) => {
    // console.log(value.format('YYYY-MM-DD'))
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('start_date', value);
  };

  onEndChange = value => {
    this.onChange('end_date', value);
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  setCategories = topics => {
    var category1 = this.state.categories
    category1.push(topics)
    this.setState({
      categories: category1
    });
    console.log("this is topicsssss", this.state.categories)
  };

  setTime = hours_per_day => {
    console.log("this is timeeeeee", hours_per_day)
    this.setState({ hours_per_day: hours_per_day });
  };

  handleSubmit = () => {
    axios.post('/api/user_agendas',
        {
        email: "bob@Dee.com",
        start_date: this.state.start_date.format('YYYY-MM-DD'),
        end_date: this.state.end_date.format('YYYY-MM-DD'),
        categories: this.state.categories,
        hours_per_day: this.state.hours_per_day
      }).then(() => this.setState({ redirect: true }));
    console.log("this is start_date", this.state.start_date.format('YYYY-MM-DD'))
    console.log("this is end_date", this.state.end_date.format('YYYY-MM-DD'))
  }

  render() {
    const { redirect } = this.state;
    const { start_date, end_date, endOpen } = this.state;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

     if (redirect) {
       return <Redirect to='/2019-06-22/activities/'/>;
     }

    return (
      <div className="datePicker_form">
       <Form {...formItemLayout} >
       <Form.Item >
        <Schedule
         onSelectedCategories = { this.setCategories }
        />
       </Form.Item>
       <p className="text_schedule_form">How many hours per day</p>
       <Form.Item>
        <TimePicker123
        onSelectedTime = { this.setTime }
        />
       </Form.Item>
        <Form.Item>
          <DatePicker
            disabledDate={this.disabledStartDate}
            showTime
            format="YYYY-MM-DD"
            value={start_date}
            placeholder="Star Date"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
          />
         </Form.Item>
        <Form.Item>
          <DatePicker
            disabledDate={this.disabledEndDate}
            showTime
            format="YYYY-MM-DD"
            value={end_date}
            placeholder="End Date"
            onChange={this.onEndChange}
            open={endOpen}
            onOpenChange={this.handleEndOpenChange}
          />
         </Form.Item>
          <Button className="datePicker_button" onClick={this.handleSubmit}>
            Submit
          </Button>
      </Form>
      </div>
    );
  }
}

export default datePicker;

