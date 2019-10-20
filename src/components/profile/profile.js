import React, { Component } from "react";
import UserInfoSection from "./user-info-section";
import AddPlace from "./add-place";

import "./profile.scss";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <UserInfoSection />
        <AddPlace />
      </div>
    );
  }
}
