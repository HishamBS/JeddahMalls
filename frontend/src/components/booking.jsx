import React, { Component } from "react";
import { Container } from "react-bootstrap";
import StylisList from "./StylisList";
import axios from "axios";
export default class Stylist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sid: []
    };
  }
  componentDidMount() {
    console.log("bookings");
    axios.get("http://localhost:2550/api/v1/users/stylists").then(res => {
      console.log(res.data);
      this.setState({ data: res.data });
      this.setState({ sid: res.data });
    });
  }
  render() {
    console.log(this.state.data);
    console.log(this.state.data._id);
    return (
      <Container>
        <br />
        <h1 className="texralign">Pick Your Fashion Stylist </h1>
        <h4 className="texralign">
          Book your fashion Specialist at any time That Suits You. A Specialist
          Will Help You To Choose Your Clothes Professionally And At An
          Affordable Price{" "}
        </h4>
        <br />
        {this.state.data.map(e => (
          <StylisList elm={e} />
        ))}
        <br />
      </Container>
    );
  }
}
