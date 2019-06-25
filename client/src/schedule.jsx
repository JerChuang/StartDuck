import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Input, Radio } from 'antd';
import SlideToggle from "react-slide-toggle";



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
            <div className="radio_style">
              <Radio>Cooking</Radio>
              <Radio>Japanese</Radio>
              <Radio>Coding</Radio>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);



export default schedule;


