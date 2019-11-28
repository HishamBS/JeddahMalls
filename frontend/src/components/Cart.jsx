import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Card body>
          <h2> Booking Status : {this.props.booking_status} </h2>
          <h4>{this.props.booking.time}</h4>
          <button>delete</button>
        </Card>
      </div>
    );
  }
}
