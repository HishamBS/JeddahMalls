import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class adminRole extends Component {
 
    

  render() {
    return (
      <div>
          { console.log(this.props.data)} 
        <h3>Logged </h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>mall name</th>
              <th>mall image</th>
              <th>mall desc</th>
              <th>mall contact</th>
              <th>mall_stores</th>
            </tr>
          </thead>
          <tbody>
            {/* { this.mallList() } */}
          </tbody>
        </table>
      </div>
    )
  }
}