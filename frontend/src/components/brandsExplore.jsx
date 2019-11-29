import React from "react";
import { Container } from "react-bootstrap";
import { Card,  Image } from "semantic-ui-react";
import {  MDBBtn } from "mdbreact";

export const brandsExplore = props => {
  return (
    <Container>
      <br />

      <Card className="cr">
        <Image className="cr" src={props.elm.store_image} />
        <Card.Content>
          <Card.Header> {props.elm.store_name}</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>{props.elm.store_desc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          {props.elm.store_website}

          <a href="/storedetails">
            <MDBBtn className="bt" rounded gradient="aqua">
              Explore
            </MDBBtn>
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
};
export default brandsExplore;
