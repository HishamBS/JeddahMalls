import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export const storesExplore = () => {
     // console.log(props.ele.mall_name);
    return (
        <div >
 
        <br/>
     <Card style={{ width: '28rem' }} >
     <Image src={props.ele}  />
     <Card.Content>
       <Card.Header>{props.ele}</Card.Header>
       <Card.Meta>Joined in 2016</Card.Meta>
       <Card.Description>
       {props.ele}
       </Card.Description>
     </Card.Content>
     <Card.Content extra>
       <a>
         <Icon name='user' />
         10 Friends
       </a>
       <Button  href ="/stores"variant="primary" size="lg">
       explore
     </Button>
     </Card.Content>
   </Card> 
   
     </div>
    )
}

