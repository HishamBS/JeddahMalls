import React from "react";
import { Container, Button } from "react-bootstrap";
import { Card, Icon, Image } from "semantic-ui-react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export const brandsExplore = props => {
  console.log(props.elm.store_image);
  // props.elm.createdAt
  return (
    <Container>
      <br />

      <Card className="cr" style={{ width: "28rem" }}>
        <Image src={props.elm.store_image} />
        <Card.Content>
          <Card.Header> {props.elm.store_name}</Card.Header>
          {/* <Image src={props.ele.store_image}  /> */}

          {/* store_image */}
          <Card.Meta></Card.Meta>
          <Card.Description>{props.elm.store_desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {props.elm.store_website}

          <MDBBtn className="bt" rounded gradient="aqua">
            Explore
          </MDBBtn>
        </Card.Content>
      </Card>
    </Container>
  );
};
export default brandsExplore;
