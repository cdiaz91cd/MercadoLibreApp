import React, { Component } from 'react';
import './Breadcrumb.css';


class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb-bar">
        <ul>
          <li>
            {this.props.categories.map((category) => {
              return (
                <span>{category.name} > </span>
              )
            })
            }
          </li>
        </ul>
      </div>
    )
  }
}

export default Breadcrumb;

