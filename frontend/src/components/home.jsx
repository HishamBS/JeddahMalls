import React, { Component } from 'react'
import shopper from '../imge/shopper.png'
import RedSeaMall from '../imge/RedSeaMall.jpg'
import Shopping from '../imge/shopping.png'
import LePrestige from '../imge/LePrestige.png'
import personalShopper from '../imge/personalShopper.jpg'
import Restaurant from '../imge/Restaurant.png'
import muvi from '../imge/muvi.png'
import Activity from '../imge/Activity.jpg'
import mallsExplore from '../components/mallsExplore'
import malls from './malls'
import '../comp.css';
import { Container ,Col,  Row, Carousel ,Card} from 'react-bootstrap';

import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default class home extends Component {
    render() {
        return (
<div>
<Carousel>
  <Carousel.Item>
    <img className="d-block w-100" src={shopper} alt="First slide"/>
  <Carousel.Caption>

   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={RedSeaMall}
      alt="Third slide"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={Shopping} alt="Third slide" />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Container className="curve">
 

  <Row className="justify-content-md-center">
    <Col xs lg="12" > 

</Col>
  </Row>



<br/>
<h1 className="fontSize" > What are you Looking For  ? </h1>
<br/>
 
</Container>


<MDBContainer className="mt-6">

        <MDBRow className="mt-6">
          <MDBCol md="6">
            <MDBView hover zoom>
            
              <img src={LePrestige} className="img-fluid" alt=""/>
              <MDBMask className="flex-center">
              <p className="white-text"><a href="/malls"> Malls  </a></p>
                
              </MDBMask>
            </MDBView>
          </MDBCol>
          <br/>
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src={muvi}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Entertainment</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
              <img src={Activity} className="img-fluid" alt="" />
              <MDBMask className="flex-center">
                <p className="white-text">Event & Activity</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <br/>
          <MDBCol md="6">
            <MDBView hover zoom>
              <img src={Restaurant} className="img-fluid" alt="" />
              <MDBMask className="flex-center">
                <p className="white-text">Restaurant</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        
        </MDBRow>
<br/>
        <MDBRow> 
        <MDBCol>
            <MDBView hover zoom>
              <img
                src={personalShopper}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <a href="/booking"><p className="white-text">Helps!</p></a>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br/>

      </MDBContainer>

            </div>
        )
    }
}
