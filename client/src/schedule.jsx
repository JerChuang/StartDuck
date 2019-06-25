import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactDom from 'react-dom';
import { Input, Radio } from 'antd';
import SlideToggle from "react-slide-toggle";
import axios from 'axios';


class schedule extends React.Component{

    constructor(props) {
      super(props)
      this.state = {
        categories: []
    }
  }

    componentDidMount() {
        console.log(this.props.params)
        axios.get('/api/categories') // You can simply make your requests to "/api/whatever you want"
        .then((response) => {
          this.setState({
            categories: response.data.categories
          });
        })
      }

 render() {
  const categories = this.state.categories.map(category =>{
    return( <Radio key={ category.id }>{ category.name }</Radio> )
  })

    return(
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
                  { categories }
                </div>
              </div>
            </div>
          </div>
        )}
      />
    )
 }
};



export default schedule;


