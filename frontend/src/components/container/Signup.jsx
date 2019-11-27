import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { register } from '../functionAuth'
export default class Signup extends Component {
    state={}
    onChangHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmitHandelr = (e) => {
        e.preventDefault()
        register(this.state)
        console.log(e.target.value);
        this.props.history.push('/login')
    }
    render() {
        return (
            <div class="container">
                <Form onSubmit={this.onSubmitHandelr}>
                    <h3>Sign Up</h3>
                    <Form.Field className="form-group">
                        <label>First name</label>
                        <input placeholder='First Name' className="form-control" name="first_name"
                        onChange={this.onChangHandler} />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label>Last name</label>
                        <input placeholder='Last Name' className="form-control" name="last_name"
                        onChange={this.onChangHandler} />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label>Email address</label>
                        <input placeholder='email' className="form-control" name="email"
                        onChange={this.onChangHandler} />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label>Password</label>
                        <input placeholder='password' className="form-control" name="password"
                        onChange={this.onChangHandler} />
                    </Form.Field>
                    <Form.Field className="form-group">
                        <label>role</label>
                        <input type="role" className="form-control" placeholder="Enter role" onChange={this.onChangHandler}/>
                    </Form.Field><br/><br/>
                    <Form.Field>
                <input type="checkbox"  onChange={this.onChangHandler} name="role" value="stylist"/> I am a stylesh<br/><br/>
                    </Form.Field>
                    {/* <input type="checkbox"  onChange={this.onChangHandler} name="role" value="stylist"/>  I am a stylist<br/> */}
                    <Button type='submit' className="btn btn-primary btn-block">Submit</Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="">sign in?</a>
                    </p>
                </Form>
            </div>
        )
    }
}