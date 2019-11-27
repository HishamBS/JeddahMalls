import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { withRouter} from "react-router-dom";

//
 class Info extends Component {
  state = {
    first_name: this.props.data.first_name,
    last_name: this.props.data.last_name,
    email: this.props.data.email,
    password: "",
    flag: false,
    data: this.props.data
  };

  handleEdit = () => {
    this.setState({ flag: !this.state.flag });
  };
  handleSave = async () => {
    let editedData = await axios({
      method: "put",
      url: `http://localhost:2550/api/v1/users/profile/${this.props.data._id}`,
      headers: { "Content-Type": "application/json" },
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password
      }
    });
    console.log(editedData.msg);
    
    if (editedData.data.msg === "edited successfully") {
      localStorage.removeItem('usertoken');
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

  render() {
    console.log(this.state.first_name);
    console.log(this.state.last_name);
    console.log(this.state.password);

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
        <div className={this.state.flag ? "show" : "hide"}>
          <label htmlFor="">password :</label>
          <input
            type="password"
            name="password"
            id=""
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
        </div>
        <div className={this.state.flag ? "hide" : "show"}>
          <label htmlFor="">Password :</label>
          <label>{this.state.password}</label>
        </div>
        <div>
          <button onClick={this.handleEdit}>edit</button>
          <button onClick={this.handleSave}>save</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Info)