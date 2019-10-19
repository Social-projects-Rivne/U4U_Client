import React, { Component } from "react";
import AvatarSection from "./avatar-section";
import UserInfoForm from "./user-info-form";

import "./user-info-section.scss";

export default class UserInfoSection extends Component {
  render() {
    return (
      <div className="user-info-section">
        <AvatarSection />
        <UserInfoForm />
      </div>
    );
  }
}
