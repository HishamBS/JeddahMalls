import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Malls from "./components/malls";
import Restaurants from "./components/restaurants";
import Entertainment from "./components/entertainment";
import Service from "./components/service";
import Aboutus from "./components/aboutus";
import Stores from "./components/stores";
import Brands from "./components/brands";
import axios from "axios";
import MyProfile from "./components/MyProfile";
import Booking from "./components/booking";
import Login from "./components/container/Login";
import Signup from "./components/container/Signup";
import jwt_decode from "jwt-decode";
import StoreDetails from "./components/StoreDetails";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [],
      searchbar: "",
      selectMall: "",
      stores: [],
      user: {},
      token: "",
      login: false
    };
  }
  userLogIn = info => {
    this.setState({ info });
  };

  filterList = async string => {
    let itemstmp = [...this.state.data];
    let searchWord = new RegExp(string + ".*");
    let filtered = await this.state.data.filter(item => {
      return item.mall_name.toLowerCase().match(searchWord);
    });
    if (filtered.length > 0) {
      console.log("filtered: ", filtered);
      this.setState({ data: filtered, items: itemstmp });
    }
  };

  filteStore = string => {
    {
      let itemstmpStore = [...this.state.stores];
      let searchWord = new RegExp(string + ".*");
      let filtered = itemstmpStore.filter(item => {
        return item.store_name.toLowerCase().match(searchWord);
      });
      if (filtered.length > 0) {
        console.log("filtered: ", filtered);
        this.setState({ stores: filtered, items: itemstmpStore });
      }
    }
  };

  changeSelectStores = selectstores => {
    this.setState({ stores: selectstores });
  };

  changeSelecMall = select => {
    this.setState({ selectMall: select });
  };

  componentWillMount = () => {
    this.setState({
      initialItems: this.state.data,
      items: this.state.data
    });
  };

  async componentDidMount() {
    axios.get("/api/v1/malls/").then(res => {
      this.setState({ data: res.data });
    });
    if (localStorage.usertoken) {
      const token = localStorage.usertoken;
      const decoded = await jwt_decode(token);
      this.setState({ user: decoded.user });
    }
  }

  render() {
    return (
      <Router>
        <Navbar />
        <br />
        <Route exact path="/" exact component={Home} />
        <Route
          exact
          path="/malls"
          render={props => (
            <Malls
              {...props}
              data={this.state.data}
              filterList={this.filterList}
              changeSelecMall={this.changeSelecMall}
            />
          )}
        />
        <Route
          path="/stores"
          render={props => (
            <Stores
              {...props}
              data={this.state.data}
              selectMall={this.state.selectMall}
              changeSelectStores={this.changeSelectStores}
            />
          )}
        />
        {/* <Route exact path="/admin" to="http://localhost:2550/admin" />
        <Route
          exact
          path="/AdminRole"
          render={props => <AdminRole {...props} data={this.state.data} />}
        /> */}
        <Route
          path="/brands"
          render={props => (
            <Brands
              {...props}
              data={this.state}
              filterStore={this.filterStore}
              changeSelectStores={this.changeSelectStores}
              stor={this.state.stores}
            />
          )}
        />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/StoreDetails" component={StoreDetails} />
        <Route path="/service" component={Service} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/myprofile" component={MyProfile} />
        <Route
          path="/booking"
          render={props => <Booking {...props} user={this.state.user} />}
        />
        <Route exact path="/register" component={Signup} />
        <Route
          exact
          path="/login"
          render={() => <Login userLogIn={this.userLogIn} />}
        />

        {/* <Footer /> */}
      </Router>
    );
  }
}
