import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

//
class Info extends Component {
  state = {
    first_name: this.props.data.first_name,
    last_name: this.props.data.last_name,
    email: this.props.data.email,
    flag: false,
    passFlag: false,
    data: this.props.data,
    password:'password'
  };

  handleEdit = () => {
    this.setState({ flag: !this.state.flag });
  };
  handlePassword = () => {
    this.setState({ passFlag: !this.state.passFlag });
    this.setState({password:''})
  };
  handleSave = async () => {
    let editedData = await axios({
      method: "put",
      url: `/api/v1/users/profile/${this.props.data._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name
      }
    });

    if (editedData.data.msg === "edited successfully") {
      localStorage.removeItem("usertoken");
      this.props.history.push("/login");
    }
  };
  handleSavePassword = async () => {
    let editedData = await axios({
      method: "put",
      url: `/api/v1/users/profile/${this.props.data._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        password: this.state.password
      }
    });

    if (editedData.data.msg === "edited successfully") {
      localStorage.removeItem("usertoken");
      this.props.history.push("/login");
    }
  };
  onChangeHandler = e => {
    if (this.state.flag) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };
  onPasswordChangeHandler = e => {
    if (this.state.passFlag) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  render() {

    return (
      <div>
        <div className={this.state.flag ? "hide" : "show"}>
          <label htmlFor="">First Name :</label>
          <label>{this.props.data.first_name}</label>
        </div>
        <div className={this.state.flag ? "show" : "hide"}>
          <label htmlFor="">First Name :</label>
          <input
            type="text"
            name="first_name"
            id=""
            value={this.state.first_name}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className={this.state.flag ? "hide" : "show"}>
          <label htmlFor="">Last Name :</label>
          <label>{this.props.data.last_name}</label>
        </div>
        <div className={this.state.flag ? "show" : "hide"}>
          <label htmlFor="">Last Name :</label>
          <input
            type="text"
            name="last_name"
            id=""
            value={this.state.last_name}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className="show">
          <label htmlFor="">Email :</label>
          <label htmlFor="">{this.props.data.email}</label>
        </div>
        <div className={this.state.passFlag ? "show" : "hide"}>
          <label htmlFor="">password :</label>
          <input
            type="password"
            name="password"
            id=""
            value={this.state.password}
            onChange={this.onPasswordChangeHandler}
          />
        </div>
        <div className={this.state.passFlag ? "hide" : "show"}>
          <label htmlFor="">Password :</label>
          <label>******************</label>
        </div>
        <div>
          <button onClick={this.handleEdit}>edit fields</button>
          <button onClick={this.handleSave}>save</button>
          <button onClick={this.handlePassword}>edit password</button>
          <button onClick={this.handleSavePassword}>save new password</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Info);
