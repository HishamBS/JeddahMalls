import React, { Component } from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bookings from "./Bookings";
import Info from "./Info";
import jwt_decode from "jwt-decode";

export default class MyProfile extends Component {
  state = {};

  async componentDidMount() {
    try {
      if (!localStorage.usertoken) {
        this.props.history.push("/login");
      } else {
        const token = localStorage.usertoken;
        const decoded = await jwt_decode(token);
        this.setState(decoded.user);
      }
    } catch (error) {
      alert('check your credintials')
      console.log(error);
      this.props.history.push("/login");
    }
  }
  render() {

    return (
      <div>
        <Tabs className="tabStyles">
          <TabList>
            <Tab>
              <h5><i class="fas fa-user-circle" >My Profile</i></h5>
            </Tab>
            <Tab>
              <h5><i class="fas fa-history" >My Bookings</i></h5>
            </Tab>
          </TabList>

          <TabPanel>
            <Info data={this.state} />
          </TabPanel>
          <TabPanel>
            <Bookings data={this.state} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
