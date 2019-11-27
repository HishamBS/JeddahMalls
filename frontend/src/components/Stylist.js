import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Nav, Navbar } from "react-bootstrap";
import Footer from "./footer";
// import  Navbar from './components/navbar'
import "../App.css";
import { Bookingg } from "./stylistco/Bookingg";
import { Myfriendss } from "./stylistco/Myfriendss";
import { Myreviewss } from "./stylistco/Myreviewss";

export default class Stylist extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="smallDiv">
          <br />

          <h3 className="U">
            &nbsp;{" "}
            <i class="fas fa-user-tag">&nbsp; Stylist Name: Abeer muzaini</i>
          </h3>
          <h4 className="E">
            {" "}
            &nbsp; &nbsp;
            <i class="fas fa-at">
              {" "}
              &nbsp; &nbsp; &nbsp; E-mail : Abeer@gmail.com{" "}
            </i>{" "}
          </h4>
          <div>
            <Nav fill variant="tabs">
              <Nav.Item>
                <Nav.Link href="/bookingg" eventKey="link-1">
                  <i class="fas fa-history">Booking History </i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/myfriendss" eventKey="link-2">
                  <i class="fas fa-users">My Friends</i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/myreviewss" eventKey="link-2">
                  {" "}
                  <i class="fas fa-align-justify">My Reviwes</i>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav path="/bookingg" component={Bookingg} />
            <Nav path="/myfriendss" component={Myfriendss} />
            <Nav path="/myreviewss" component={Myreviewss} />
          </div>
        </div>

      </div>
    );
  }
}
