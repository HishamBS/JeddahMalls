import React from 'react'
import { Container,Button} from 'react-bootstrap';
import { Card,  Image } from 'semantic-ui-react'
import {Link} from "react-router-dom"



export const mallsExplore = (props) => {

  var changeSelecMall=()=>{
    props.changeSelecMall(props.ele)
  }
  

   
  return (
    <Container >
    <div>
 
       <br/>
       
    <Card  style={{ width: 'width: 10%' , }} className="cr" >
    <Image  className ="im"  src={props.ele.mall_image}  />
    <Card.Content>
      <Card.Header className="lefExt" >{props.ele.mall_name}</Card.Header>
     <Card.Meta  className="lef" > {'Contact Mall :  '} {props.ele.mall_contact}</Card.Meta>
      <Card.Description className="lef" >
      {props.ele.mall_desc}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    

   

     
      <Button  className="bto" onClick={ changeSelecMall }  as = {Link} to ="/stores" variant="primary" size="lg">
      explore
    </Button>
    </Card.Content>
</Card> 
  
    </div>

    </Container>
  )
}
export default mallsExplore





