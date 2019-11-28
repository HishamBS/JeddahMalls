import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { Component } from "react";
import { login } from "../functionAuth";
import jwt_decode from "jwt-decode";
import { withRouter, Link } from "react-router-dom";
class Login extends Component {
  state = {};
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = e => {
    try {
      e.preventDefault();
      login(this.state);
      setTimeout(() => {
        this.props.history.push("/myprofile");
      }, 3000);
    } catch (error) {
      console.log(error);
      
      
    }
  
   
  };

  render() {
    return (
      <div class="container">
        <Form onSubmit={this.onSubmitHandelr}>
          <h3>Sign In</h3>
          <Form.Field className="form-group">
            <label>Email address</label>
            <input
              name="email"
              className="form-control"
              placeholder="email"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="password"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            <a href="/register">dont have an account , sign up from here</a>
          </p>
        </Form>
      </div>
    );
  }
}
export default withRouter(Login);
