import React, { Component } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";
import "react-tabs/style/react-tabs.css";
import UserBookingTable from "../components/UserBookingTable";
import "../App.css"

export default class Bookings extends Component {
  state = {
    bookings: [],
    booking_status: ""
  };
  async componentDidMount() {
    let bookings = await axios.get(
      `/api/v1/bookings/${this.props.data._id}`
    );
    this.setState({ bookings });
  }

  render() {
    return (
      <div>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="tb">Name</Table.HeaderCell>
              <Table.HeaderCell className="tb"> booking date</Table.HeaderCell>
              <Table.HeaderCell className="tb">Booking Time</Table.HeaderCell>
              <Table.HeaderCell className="tb">Booking Status</Table.HeaderCell>
              {this.props.data.role === "stylist" && (
                <Table.HeaderCell className="tb">Respond to the request</Table.HeaderCell>
              )}
            </Table.Row>
          </Table.Header>
          {this.state.bookings.length === 0
            ? ""
            : this.state.bookings.data.map(boke => {
                return (
                  <UserBookingTable
                    boke={boke}
                    status={this.status}
                    userType={this.props.data.role === "stylist" ? true : false}
                    myId={this.props.data._id}
                  />
                );
              })}
        </Table>
      </div>
    );
  }
}
