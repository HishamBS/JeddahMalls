import React, { Component } from 'react'
import {Carousel, Container } from 'react-bootstrap';
import { Button, Col,Row } from 'reactstrap';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {Link} from "react-router-dom"
import Brands from './brands'
import axios from 'axios'
// import "node_modules/video-react/dist/video-react.css"; 
import { Player } from 'video-react';


import redsea from '../imge/redseam.jpg'

export default class eachMall extends Component {

  constructor (props) {
    super(props);
    this.state = {
        data:[],
        items:[]
    };
  }

  componentDidMount()
  { 
    console.log('called component did mount')
    axios.get(`/api/v1/malls/${this.props.selectMall._id}/stores`)
      .then(res =>{
        this.props.changeSelectStores(res.data)
        console.log(res.data);
        
        this.setState({items:res.data})          
      })   
  }
  

  // 5ddb729d07cf2170b9ff3920
    render(props) {
      console.log(props);
      
      console.log(this.state.items)
      console.log(this.props.selectMall._id)
      // console.log(this.props.data.mall_stores)
        return (
          <Container>

            <br/>
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={redsea}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={redsea}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={redsea}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <br/>
            <p className="dec">In 2018, Red Sea Mall has won several awards in the GCC, Africa, & Middle East Business Excellence Awards. Some of the Awards that has won are: Red Sea Mall Cup, ICSC Foundation Award,The Best Shopping Center of the Year for the ITAAM project that was aimed at reducing the waste of food and utilization of the leftover, non-used food by distributing it to the needy, the productive families campaign, & much more. </p>
            <br/>
      <Container>
      <div className="conternerBotton">
        <Link to = "/brands">  <MDBBtn gradient="aqua" block="true" type="submit" className="mr-auto"  > <h2>Explore The Mall</h2> </MDBBtn></Link>
        <MDBBtn gradient="aqua" block="true" type="submit" className="mr-auto"  ><h2>Mall Map </h2></MDBBtn>  

 
     
       </div>

       <div className="conterner"> 
          {( e =><Brands  ele ={e}  stors = {this.state.items} changeSelecMall={this.props.changeSelecMall}/>)}  
          </div>
            
            <br/>

            <Row>
   
    <Col> <h1>TIPS FORM VISITOR</h1>
    
    
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    
    
    </Col>


    <Col><h1 className="textMarg">Venue Information </h1></Col>

  </Row>
  <br/>
            

      </Container>
   
            
     </Container>
        )
    }
}
