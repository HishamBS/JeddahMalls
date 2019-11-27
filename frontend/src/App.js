import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "mdbreact/dist/css/mdb.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home'
import Malls from './components/malls'
import Restaurants from './components/restaurants'
import Entertainment from './components/entertainment'
import Service from './components/service'
import Aboutus from './components/aboutus'
import Stores from './components/stores'
import Brands from './components/brands'
import AdminRole from './components/adminRole'
import axios from 'axios'

export default class App extends Component {
  

  constructor (props) {
    super(props);
    this.state = {
        data:[],
        items:[],
        searchbar: '',
        selectMall:'',
        stores : []
    };
  }



  filterList = async (string) => {

   let itemstmp = [...this.state.data]
   let searchWord = new RegExp(string + ".*")
   let filtered = await this.state.data.filter((item) => {
    return item.mall_name.toLowerCase().match(searchWord) 
    });
    if(filtered.length > 0){
      console.log("filtered: ",filtered)
      this.setState({data: filtered, items : itemstmp});
    }  
  } 



   filterStore = async (string) => {

    let itemstmpStore = [...this.state.stores]
    let searchWord = new RegExp(string + ".*")
    let filtered = await this.state.stores.filter((item) => {
     return item.store_name.toLowerCase().match(searchWord) 
     });
     if(filtered.length > 0){
       console.log("filtered: ",filtered)
       this.setState({stores: filtered, items : itemstmpStore});
     }  
   } 



changeSelectStores =(selectstores)=>{
  console.log(selectstores)
  this.setState({stores : selectstores})
  
}

  changeSelecMall = (select)=>{
    console.log(select)
this.setState({selectMall : select})
  }

  componentWillMount = () => {
    console.log('called component will mount')
    this.setState({
        initialItems: this.state.data,
        items: this.state.data
    })
  }
 

  componentDidMount()
  { 
    console.log('called component did mount')
    axios.get('/api/v1/malls')
      .then(res =>{
        console.log(res.data);
        this.setState({data:res.data})          
      })   
  }




  render() {
    console.log(this.state.stores);
    console.log(this.state.selectMall);
    console.log(this.state.data);

    return (
      <Router>
      <Navbar/>
      <br/>

      <Route exact path="/" exact component={Home}/>
      <Route exact path="/malls" render={props => (<Malls {...props} data={this.state.data} filterList={this.filterList} changeSelecMall={this.changeSelecMall} />)}/>
      <Route path="/stores"  render={props => (< Stores  {...props} data={this.state.data} selectMall={this.state.selectMall}  changeSelectStores ={this.changeSelectStores}/>)}  />
      <Route exact path="/admin"  />
      <Route exact path="/AdminRole" render={props => (< AdminRole  {...props} data={this.state.data} />)}  />
      <Route path="/brands" render={props => (< Brands  {...props}   data ={this.state}   filterStore={this.filterStore}   changeSelectStores ={this.changeSelectStores}  stor={this.state.stores} />)} />
      <Route path="/restaurants" component={Restaurants}/>
      <Route path="/entertainment" component={Entertainment}/>
      <Route path="/service" component={Service}/>
      <Route path="/aboutus" component={Aboutus}/>
      
  
      <Footer/>
  
      </Router>
    )
  }
}
