import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from '../imge/search.png'
import sign from '../imge/sign.png'
import logo from '../imge/logo.png'
import Admin from './admin'
import { Navbar, Nav,Form,FormControl, Button} from 'react-bootstrap';
export default class navbar extends Component {
  state = {
    activeItem: 'home',
  }
  handleItemClick = ((e, { name }) => {
    this.setState({ activeItem: name })
    // extra
    if (name == "logout" || name == "home") {
      this.props.history.push(`/`)
      if (name == "logout") {
        localStorage.removeItem('usertoken')
      }
    } else {
      this.props.history.push(`/${name}`)
    }
  })
  render() {
    const { activeItem } = this.state
    return (
      <Navbar bg="light" expand="lg">      
      <Link to="/" className="navbar-brand"><img src={logo}/> </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Link to="/Malls" className="nav-link">Malls</Link>
      <Link to="/restaurants" className="nav-link">Restaurants</Link>
      <Link to="/entertainment" className="nav-link">Entertainment</Link>
      <Link to="/service" className="nav-link">Service</Link>
      <Link to="/aboutus" className="nav-link">About Us</Link>
      </Nav>
      <a href=""> <img src={Search} style={{width:60, marginTop: -6}} /></a>
      <NavDropdown src={Search} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
        <NavDropdown.Item href="/myprofile">Stylist</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <a href="/login" Button basic inverted content="Login" name="Login" onClick={this.handleItemClick}> <img src={sign} style={{width:50}} /></a>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}