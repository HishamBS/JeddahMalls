import { Form } from "semantic-ui-react";
import React, { Component } from "react";
import { login } from "../functionAuth";
import { withRouter } from "react-router-dom";
class Login extends Component {
  state = {};
  onChangHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmitHandelr = e => {
    
      e.preventDefault();
      login(this.state)
      .then(res=>{
        this.props.history.push("/myprofile");
      })
      .catch(err => {console.log(err)})
  
      
      
      
    

    
  
   
  };

  render() {
    return (
      <div class="container">
        <Form onSubmit={this.onSubmitHandelr}>
          <h3 className="ttb">Sign In</h3>
          <Form.Field className="form-group">
            <label className="tb">Email address</label>
            <input
              name="email"
              className="form-control"
              placeholder="email"
              onChange={this.onChangHandler}
            />
          </Form.Field>
          <Form.Field className="form-group">
            <label className="tb">Password</label>
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
