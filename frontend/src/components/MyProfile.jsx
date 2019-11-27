import React, { Component } from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bookings from "./Bookings";
import Info from "./Info";
import axios from "axios";

export default class MyProfile extends Component {
  state = {};

  getUser = async () => {
    let user = await axios.get(
      `http://localhost:2550/api/v1/users/profile/5ddc1b9c5c0bab8fe2bcae35`
    );
    this.setState(user.data);
    console.log(this.state);
  };

  async componentWillMount() {
    console.log("user.data");
    this.getUser();
  }

  // componentDidMount() {
  //   axios.get(`/api/v1/users/profile/5ddc2762937e73925c21428c`).then(res => {
  //     console.log(res.data);
  //   });
  // }
  render() {
    return (
      <div>
        <Tabs className="tabStyles">
          <TabList>
            <Tab>
              <h5>My Profile</h5>
            </Tab>
            <Tab>
              <h5>My Bookings</h5>
            </Tab>
          </TabList>

          <TabPanel>
            <Info data={this.state} />
          </TabPanel>
          <TabPanel>
            <Bookings />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
