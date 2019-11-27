import React, { Component } from "react";
import { log } from "util";
//
export default class Info extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "********",
    flag: false,
    data: this.props.data
  };

  handleEdit = () => {
    this.setState({ flag: true });
  };
  handleSave = () => {};
  onChangeHandler = e => {
    if (this.state.flag) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  componentDidMount() {
      setTimeout(() => {
        this.setState({ data: this.props.data });
      }, 1000);
    
  }

  render() {
    console.log(this.state.data);
    console.log(this.props.data);

    return (
      <div>
        <label htmlFor="">First Name :</label>
        <input
          type="text"
          name="first_name"
          id=""
          value={this.state.first_name}
        />
        <label htmlFor="">Last Name :</label>
        <input
          type="text"
          name="last_name"
          id=""
          value={this.state.last_name}
        />
        <label htmlFor="">Email :</label>
        <input
          type="text"
          name="email"
          id=""
          value={this.state.email}
          disabled
        />
        <label htmlFor="">Password :</label>
        <input type="text" name="password" id="" value={this.state.password} />
        <div>
          <button onClick={this.handleEdit}>edit</button>
          <button>save</button>
        </div>
      </div>
    );
  }
}
