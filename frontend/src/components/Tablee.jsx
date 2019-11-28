import { Header, Image, Table, Button } from "semantic-ui-react";
import axios from "axios";
import React, { Component } from "react";

export default class Tablee extends Component {
   changeStatus = async function(status){
    let changedStatus = await axios.put(
      `http://localhost:2550/api/v1/bookings/book/${this.props.boke._id}`,
      status
    );
    console.log(changedStatus);
    
    if (changedStatus.data.msg == "edited booking status successfully") {
      console.log("lol");
    }
  };
  render() {
    return (
      <div>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                {this.props.userType == false ? (
                  <Header.Content>
                    {this.props.boke.user[1].first_name +
                      " " +
                      this.props.boke.user[1].last_name}
                  </Header.Content>
                ) : (
                  <Header.Content>
                    {this.props.boke.user[0].first_name +
                      " " +
                      this.props.boke.user[0].last_name}
                  </Header.Content>
                )}
              </Header>
            </Table.Cell>
            <Table.Cell>
              {this.props.boke.booking_time.split("T")[0]}
            </Table.Cell>
            <Table.Cell>
              {"0" +
                Math.abs(
                  this.props.boke.booking_time.split("T")[1].split(":")[0] - 12
                ) +
                ":" +
                this.props.boke.booking_time.split("T")[1].split(":")[0]}
            </Table.Cell>

            <Table.Cell>{this.props.boke.booking_status}</Table.Cell>
            {this.props.userType && (
              <Table.Cell>
                <Button
                  inverted
                  color="red"
                  onClick={this.changeStatus("denied")}
                >
                  Rejection
                </Button>
                <Button
                  onClick={this.changeStatus("approved")}
                  inverted
                  color="green"
                >
                  Accept
                </Button>
              </Table.Cell>
            )}
          </Table.Row>
        </Table.Body>
      </div>
    );
  }
}
