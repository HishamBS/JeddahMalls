import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "../imge/search.png";
import sign from "../imge/sign.png";
import logout from "../imge/logout.png";
import logo from "../imge/logo.png";
import Admin from "./admin";
import "../App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default class navbar extends Component {
  state = {
    activeItem: "home",
    flag:false
  };
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    // extra
    if (name == "logout" || name == "home") {
      this.props.history.push(`/`);
      if (name == "logout") {
        localStorage.removeItem("usertoken");
      }
    } else {
      this.props.history.push(`/${name}`);
    }
  };
  handleLogout = () => {
    localStorage.removeItem("usertoken");
  };
  
  componentDidMount (){
    if(!localStorage.usertoken)
    {
      this.setState({flag:!this.state.flag})
    }
  }
  render() {
    const { activeItem } = this.state;
    return (
      <Navbar bg="light" expand="lg">
        <Link to="/" className="navbar-brand">
          <img src={logo} />{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/Malls" className="nav-link">
              Malls
            </Link>
            <Link to="/restaurants" className="nav-link">
              Restaurants
            </Link>
            <Link to="/entertainment" className="nav-link">
              Entertainment
            </Link>
            <Link to="/service" className="nav-link">
              Service
            </Link>
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
            <Link to="/myprofile" className="nav-link">
              {this.state.flag? "" : "My Profile"}
            </Link>
          </Nav>
          {/* <a href=""> <img src={Search} style={{width:60, marginTop: -6}} /></a>
      <NavDropdown src={Search} id="basic-nav-dropdown">
      </NavDropdown> */}
          <a
            href="/login"
            Button
            basic
            inverted
            content="Login"
            name="login"
            onClick={this.handleItemClick}
            className={this.state.flag ? "show" : "hide"}
          >
            <img
              src={sign}
              style={{ width: 50 }}
              className={this.state.flag ? "show" : "hide"}
            />
          </a>
          <a
            href="/"
            Button
            basic
            inverted
            content="Logout"
            name="logout"
            onClick={this.handleLogout}
            className={this.state.flag ? "hide" : "show"}
          >
            <img
              src={logout}
              style={{ width: 50 }}
              className={this.state.flag ? "hide" : "show"}
            />
          </a>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
