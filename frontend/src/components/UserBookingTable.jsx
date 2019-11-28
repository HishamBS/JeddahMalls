import React from "react";
import { Header, Image, Table, Button } from "semantic-ui-react";
import axios from "axios";
const UserBookingTable = props => {
  let handleClick = status => {
    axios
      .put(`http://localhost:2550/api/v1/bookings/book/${props.boke._id}`, {
        booking_status: status
      })
      .then(res => {
        if (res.data.msg == "edited booking status successfully") {
          window.location.replace("/myprofile");
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              {props.userType == false ? (
                <Header.Content>
                  {props.boke.user[1].first_name +
                    " " +
                    props.boke.user[1].last_name}
                </Header.Content>
              ) : (
                <Header.Content>
                  {props.boke.user[0].first_name +
                    " " +
                    props.boke.user[0].last_name}
                </Header.Content>
              )}
            </Header>
          </Table.Cell>
          <Table.Cell>{props.boke.booking_time.split("T")[0]}</Table.Cell>
          <Table.Cell>
            {props.boke.booking_time.split("T")[1].split(":")[0] +
              ":" +
              props.boke.booking_time.split("T")[1].split(":")[1]}
          </Table.Cell>

          <Table.Cell>{props.boke.booking_status}</Table.Cell>
          {props.userType && (
            <Table.Cell>
              <Button color="red" onClick={() => handleClick("declined")}>
                Deny
              </Button>
              <Button onClick={() => handleClick("approved")} color="green">
                Approve
              </Button>
            </Table.Cell>
          )}
        </Table.Row>
      </Table.Body>
    </>
  );
};
export default UserBookingTable;
