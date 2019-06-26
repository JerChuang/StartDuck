import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Form, DatePicker, Button } from 'antd';
import TimePicker123 from './TimePicker.jsx';
import Schedule from './schedule.jsx';

class datePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      categories: [],
      startValue: null,
      endValue: null,
      endOpen: false,
    }
  };

  disabledStartDate = startValue => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    console.log(field)
    console.log("this is specific date", value)
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
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

  setTime = time => {
    console.log("this is timeeeeee", time)
    this.setState({ time: time });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
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
            value={startValue}
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
            value={endValue}
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

