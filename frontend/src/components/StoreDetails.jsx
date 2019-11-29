import React, { Component } from "react";

export default class StoreDetails extends Component {
  render() {
    return (
      <div>
        <div className="bigDiv">
          <br />
          <a>Home > </a>
          <a>Malls > </a>
          <a>REDSEA Mall > </a>
          <a>H&M </a>
          <br />
          <br />
          <br />
          <h3>About</h3>
          <p>
            Hennes & Mauritz AB is a Swedish Multinational clothing-reation{" "}
            <br />
            known for bla bla bla bla
          </p>
          <div className="cont">
            <ul>
              <li>
                <i class="fa fa-map-marked-alt" /> djkghfdghdiog
              </li>
              <li>
                <i class="fa fa-phone" /> 90045784683
              </li>
              <li>
                <i class="fa fa-link" /> djkghfdghdiog
              </li>
              <li>
                <i class="fa fa-clock" /> djkghfdghdiog
              </li>
              <li>
                <i class="fa fa-phone" /> djkghfdghdiog
              </li>
            </ul>

            <img
              className="imgSmall"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
            />
          </div>
          <img src="https://www.redseamall.com/public_html/images/groundfloor-new1-ar.jpg" />
        </div>
      </div>
    );
  }
}
