import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import ReactDom from 'react-dom';
import { Calendar } from 'antd';


class dayActivities extends React.Component{
 
  onPanelChange = (value, mode) => {
    console.log(value, mode);
  }
  render(){

    return(
      <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
      </div>
    )
  }
}
export default dayActivities;
