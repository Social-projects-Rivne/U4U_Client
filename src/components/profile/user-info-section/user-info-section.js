import React, { Component } from "react";
import AvatarSection from "./avatar-section";
import UserInfoForm from "./user-info-form";
import UserInfo from "./user-info";

import "./user-info-section.scss";

export default class UserInfoSection extends Component {
  state = {
    editState: false
  };

  editProfile = () => {
    this.setState(({ editState }) => {
      const newEditState = !editState;

      return {
        editState: newEditState
      };
    });
  };

  render() {
    const { editState } = this.state;

    return (
      <div className="user-info-section">
        <AvatarSection />
        {editState === false ? (
          <UserInfo editProfile={this.editProfile} />
        ) : (
          <UserInfoForm editProfile={this.editProfile} />
        )}
      </div>
    );
  }
}
