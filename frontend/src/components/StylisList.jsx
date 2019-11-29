import React, { Component } from "react";
import { Card } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import axios from "axios";
import { withRouter} from "react-router-dom";
 class StylisList extends Component {
  state = {
    startDate: new Date()
  };
   
  handleBook = async() => {
    let booked = await axios.post("/api/v1/bookings/newbooking", {
      user: [this.props.user, this.props.elm._id],
      booking_status: "appending",
      booking_time: this.state.date
    });
    if(booked.data.msg ==='added')
    {
      this.props.history.push("/myprofile");
    }
  };

  handleChange = date => {
    this.setState({
      date: date
    });
  };
  render() {
    return (
      <div>
        <Card body>
          Stylist Name : {this.props.elm.first_name} {this.props.elm.last_name}
          <br />
          <h4>{this.props.elm.email}</h4>
          <DateTimePicker
            value={this.state.date}
            onChange={this.handleChange}
          />
          <button onClick={this.handleBook}>Book</button>
        </Card>
      </div>
    );
  }
}
export default withRouter(StylisList)