import React, { Component } from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import Footer from "../imge/Footer.png";

export default class footer extends Component {
  render() {
    return (
      <MDBFooter color="grey" className="dark-black-text sticky-bottom">
        <MDBContainer></MDBContainer>
        <div>
          <br />
          <img src={Footer} className="picCenter" alt="" />
        </div>
        <div color="black" className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> viral</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
