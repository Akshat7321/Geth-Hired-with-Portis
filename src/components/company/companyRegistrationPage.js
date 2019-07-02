import React, { Component } from "react";
//import "./layouts/userRegistrationLayout";
import RegistrationLayout from "../Layout/companyRegistrationLayout";
import "../styles/HomePageTopBar.css";
import { Menu, Dropdown, Search, Icon, Image, Header } from "semantic-ui-react";

class TopHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="topbar">
          <div className="alignment">
            <div />
            <div>
              <h1>Geth-Hire </h1>
            </div>
          </div>
        </div>
        <RegistrationLayout />
      </div>
    );
  }
}

export default TopHeader;
