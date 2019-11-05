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
      <div className="user-info__section">
        <AvatarSection />
        {editState === false ? (
          <UserInfo user={this.props.user} editProfile={this.editProfile} />
        ) : (
          <UserInfoForm user={this.props.user} editProfile={this.editProfile} />
        )}
      </div>
    );
  }
}
