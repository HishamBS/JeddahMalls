import React, { Component } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cart from "../components/Cart";
export default class Bookings extends Component {
  state = {
    bookings: []
  };
  appending = [];
  approved = [];
  denied = [];
  async componentDidMount() {
    let bookings = await axios.get(
      `http://localhost:2550/api/v1/bookings/${this.props.data._id}`
    );
    this.setState({ bookings });
    this.state.bookings.data.map(e => {
      switch (e.booking_status) {
        case "appending":
          this.appending.push(e);
          break;
        case "denied":
          this.denied.push(e);
          break;
        case "approved":
          this.approved.push(e);
          break;
      }
    });
  }
  render() {
    return (
      <div>
        <Tabs className="tabStyles">
          <TabList>
            <Tab>
              <h5>Pending</h5>
            </Tab>
            <Tab>
              <h5>Approved</h5>
            </Tab>
            <Tab>
              <h5>Cancelled</h5>
            </Tab>
          </TabList>

          {console.log(this.state.bookings)}
          {console.log(this.appending)}
          {console.log(this.denied)}
          {console.log(this.approved)}

          <TabPanel>
            {this.appending.map(e => {
              return (
                <Cart
                  booking_time={e.booking_time}
                  booking_status={e.booking_status}
                />
              );
            })}
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    );
  }
}
