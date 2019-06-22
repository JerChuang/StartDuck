import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Calendar } from 'antd';


class dayActivities extends React.Component{
  constructor(props){
    super(props);
  }
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  render(){

    return(
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        hello
      </div>

    )
  }
}
export default dayActivities;
