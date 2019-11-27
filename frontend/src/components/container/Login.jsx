import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login } from '../functionAuth'
import jwt_decode from 'jwt-decode'
import { withRouter , Link } from "react-router-dom";
class Login extends Component {
    state={}
    onChangHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSubmitHandelr =(e)=>{
        e.preventDefault()
        login(this.state)
        .then(res =>{
            console.log(res)
            try {
                jwt_decode(res.token);
              } catch (error) {
                console.log('👾 invalid token format', error);
                return true;
              }
              const token = jwt_decode(res.token);
              const { exp } = token;
              this.props.history.push('/')
        })
    }
    render() {
        return (
            <div class="container">
                <Form  onSubmit={this.onSubmitHandelr}>
                    <h3>Sign In</h3>
                    <Form.Field className="form-group">
                        <label>Email address</label>
                        <input name="email" className="form-control" placeholder="email" onChange ={this.onChangHandler} />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label>Password</label>
                        <input name="password" className="form-control" placeholder="password" onChange ={this.onChangHandler} />
                    </Form.Field>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </Form>
            </div>
        )
    }
}
export default withRouter(Login)