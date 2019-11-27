import React, { Component } from 'react'
import axios from 'axios'
import '../comp.css';
import MallsExplore from './mallsExplore'
import { Container } from 'react-bootstrap';
import {  MDBBtn } from "mdbreact";


export default class malls extends Component {
    state = {
      search:''
    }

    handleChange = (e) => {
      this.setState({ search : e.target.value})
    }

    filterData = (e) =>{
      // e.preventDefault()
      this.props.filterList(this.state.search)
    }
    render() {
      console.log(this.props)
      console.log(this.state);
      
        return (
   <Container>

           <h1 className="textCenter">Explore Jeddah Malls</h1>
          <div>   
            <div className="input-group md-form form-sm form-2 pl-0" >
            <input class="form-control my-0 py-1 red-border" type="text" onChange={this.handleChange} placeholder="Search" aria-label="Search" name="search" onKeyDown={this.filterData} /> 
            <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto" onClick={this.filterData} > Search </MDBBtn>  
          </div> 

          </div>    
           
                 { console.log(this.props.data)} 
                 
          <div className="conterner"> 
          {this.props.data.map( e =><MallsExplore  ele ={e} changeSelecMall={this.props.changeSelecMall}   changeSelectStores ={this.props.changeSelectStores}/>)}  
          </div>
          
            <br/>
            </Container>
        )
    }
}
