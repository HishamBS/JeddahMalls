import React from "react";
import { Header, Table, Button } from "semantic-ui-react";
import axios from "axios";
const UserBookingTable = props => {
  let handleClick = status => {
    axios
      .put(`/api/v1/bookings/book/${props.boke._id}`, {
        booking_status: status
      })
      .then(res => {
        if (res.data.msg === "edited booking status successfully") {
          window.location.replace("/myprofile");
        }
      })
      .catch(err => console.log(err));
  };
  
  let formatAMPM = ()=> {
    let date = new Date(props.boke.booking_time)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  return (
    <>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              {props.userType === false ? (
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
            {formatAMPM()}
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
