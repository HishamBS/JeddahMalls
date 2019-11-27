import { MDBCol, MDBFormInline, MDBBtn , MDBIcon} from "mdbreact";
import BrandsExplore from './brandsExplore'
import { Container} from 'react-bootstrap';
import {  MDBtn } from "mdbreact";

import axios from 'axios'


import React, { Component } from 'react'

export default class brands extends Component {
  state = {

  }

  handleChange = (e) => {
    this.setState({ search : e.target.value})
  }

  filterData = (e) =>{
    e.preventDefault()
    console.log("test")
    console.log(this.state.search)
    this.props.filterStore(this.state.search)
  }
 
  
  render(props) {
    console.log(this.props);
    console.log(this.props.stor);

    return (

      <Container>

           <h1 className="textCenter">Explore Stores</h1>
          <div>   
            <div className="input-group md-form form-sm form-2 pl-0" >
            <input class="form-control my-0 py-1 red-border" type="text" onChange={this.handleChange} placeholder="Search" aria-label="Search" name="search"  /> 
            <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto" onClick={this.filterData} > Search </MDBBtn>  
          </div> 

          </div>    
                 
                 <div className="conterner"> 
       {this.props.stor.map((e) =>
          < BrandsExplore  elm={e} />
       )}
        </div>

          
            <br/>
            </Container>
    

    )
  }
}






