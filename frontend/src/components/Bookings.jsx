import React, { Component } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";
import "react-tabs/style/react-tabs.css";
import UserBookingTable from "../components/UserBookingTable";

export default class Bookings extends Component {
  state = {
    bookings: [],
    booking_status: ""
  };
  async componentDidMount() {
    let bookings = await axios.get(
      `http://localhost:2550/api/v1/bookings/${this.props.data._id}`
    );
    this.setState({ bookings });
  }

  render() {
    return (
      <div>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>booking date</Table.HeaderCell>
              <Table.HeaderCell>Booking Time</Table.HeaderCell>
              <Table.HeaderCell>Booking Status</Table.HeaderCell>
              {this.props.data.role == "stylist" && (
                <Table.HeaderCell>Respond to the request</Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          {this.state.bookings.length == 0
            ? "wite"
            : this.state.bookings.data.map(boke => {
                return (
                  <UserBookingTable
                    boke={boke}
                    status={this.status}
                    userType={this.props.data.role == "stylist" ? true : false}
                    myId={this.props.data._id}
                  />
                );
              })}
        </Table>
      </div>
    );
  }
}
