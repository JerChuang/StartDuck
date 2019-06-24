import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Input } from 'antd';
import SlideToggle from "react-slide-toggle";
import DatePicker123 from './datePicker.jsx';



const schedule = () => (
  <SlideToggle
    duration={800}
    render={({ onToggle, setCollapsibleElement, progress }) => (
      <div className="my-collapsible">
        <button className="my-collapsible__toggle" onClick={onToggle}>
          Change Categories
        </button>
        <div className="my-collapsible__content" ref={setCollapsibleElement}>
          <div
            className="my-collapsible__content-inner"
            style={{
              transform: `translateY(${Math.round(20 * (-1 + progress))}px)`
            }}
          >
            <p>
              Collapsible content, you can reverse the toggle before it has
              finished.
            </p>
            <a
              href="https://github.com/kunukn/react-slide-toggle"
              target="_blank"
            >
              react slide toggle - github
            </a>
          </div>
        </div>
           <DatePicker123/>
      </div>
    )}
  />
);



export default schedule;


