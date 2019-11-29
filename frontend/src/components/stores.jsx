import React, { Component } from 'react'
import {Carousel, Container } from 'react-bootstrap';
import {  Col,Row } from 'reactstrap';
import {  MDBBtn } from "mdbreact";
import {Link} from "react-router-dom"
import Brands from './brands'
import axios from 'axios'
import Reviews from '../imge/reviews.png'

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

    axios.get(`/api/v1/malls/${this.props.selectMall._id}/stores`)
      .then(res =>{
        this.props.changeSelectStores(res.data)
        this.setState({items:res.data})          
      })   
  }
    render() {

        return (
          <Container>
            <br/>
            <div>
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.selectMall.mall_image}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.selectMall.mall_image}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={this.props.selectMall.mall_image}
      alt="Third slide"
    />
    <Carousel.Caption>
       </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            <br/>
            <p className="dec">{this.props.selectMall.mall_desc} </p>
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
    <img
      className="d-block w-100"
      src={Reviews}
      alt="First slide"
    />
    </Col>
    <Col>
    <h1 className="textMarg">Venue Information </h1>
    <h3 className="textMarg" >Jeddah</h3>
    <h3 className="textMarg" >Contact : {this.props.selectMall.mall_contact} </h3>
    </Col>
  </Row>
  <br/>
      </Container>
     </Container>
        )
    }
}