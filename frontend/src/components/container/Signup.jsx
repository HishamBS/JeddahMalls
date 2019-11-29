import { Button, Form } from "semantic-ui-react";
import React, { Component } from "react";
import { register } from "../functionAuth";
export default class Signup extends Component {
  state = {
    role: "regular"
  };
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = e => {
    e.preventDefault();
    register(this.state);
    this.props.history.push("/login");
  };
  render() {

    return (
      <div class="container">
        <Form onSubmit={this.onSubmitHandelr}>
          <h3 className="ttb">Sign Up</h3>
          <Form.Field className="form-group">
            <label className="tb">First name</label>
            <input
              placeholder="First Name"
              className="form-control"
              name="first_name"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Last name</label>
            <input
              placeholder="Last Name"
              className="form-control"
              name="last_name"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Email address</label>
            <input
              placeholder="email"
              className="form-control"
              name="email"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Password</label>
            <input
              type="password"
              placeholder="password"
              className="form-control"
              name="password"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">role</label>
            <select name="role" onChange={this.onChangHandler}>
              <option selected value="regular" name="regular">
                user
              </option>
              <option value="stylist" name="stylist">
                stylist
              </option>
            </select>
          </Form.Field>
          <br />
          <br />
          <Form.Field>
            <br />
            <br />
          </Form.Field>
          {/* <input type="checkbox"  onChange={this.onChangHandler} name="role" value="stylist"/>  I am a stylist<br/> */}
          <Button type="submit" className="btn btn-primary btn-block">
            Submit
          </Button>
          <p className="forgot-password text-right">
            Already registered <a href="/login" >sign in?</a>
          </p>
        </Form>
      </div>
    );
  }
}
