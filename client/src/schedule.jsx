import React from 'react';
import { Checkbox } from 'antd';
import SlideToggle from "react-slide-toggle";
import axios from 'axios';


class schedule extends React.Component{

    constructor(props) {
      super(props)
      console.log("props", this.props)
      this.state = {
        categories: []
    }
  }

    componentDidMount() {
        // console.log(this.props.params)
        axios.get('/api/categories')
        .then((response) => {
          this.setState({
            categories: response.data.categories
          });
        })
      }

    sendSelectedCategories = e => {
      this.props.onSelectedCategories(e.target.value)
    }

    render() {
      const categories = this.state.categories.map(category =>{
        return( <Checkbox
                 key={ category.id }
                 value={ category.name }
                 onChange={ this.sendSelectedCategories }
                 >
                 { category.name }
                 </Checkbox> )
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


