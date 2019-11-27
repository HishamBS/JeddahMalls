import React, { Component } from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Bookings from "./Bookings";
import Info from "./Info";
import axios from "axios";
import jwt_decode from 'jwt-decode'

export default class MyProfile extends Component {
  state = {};



  

  // componentDidMount() {
  //   axios.get(`/api/v1/users/profile/5ddc2762937e73925c21428c`).then(res => {
  //     console.log(res.data);
  //   });
  // }
  async componentDidMount() {
      if (!localStorage.usertoken){
        this.props.history.push('/login')
      }else{
        const token = localStorage.usertoken
        const decoded = await jwt_decode(token)
        console.log(decoded)
        this.setState(decoded.user)
      }
  }
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
