import React, { Component } from "react";
import AvatarSection from "./avatar-section";
import UserInfoForm from "./user-info-form";
import UserInfo from "./user-info";

import "./user-info-section.scss";

export default class UserInfoSection extends Component {

  state = {
    user: null,
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

  newDataHandler = (user) => {
    this.setState({
      user
    });
    this.editProfile();
  };

  render() {
    const { user, editState } = this.state;

    return (
      <div className="user-info__section">
        <AvatarSection />
        {editState === false ? (
          <UserInfo user={user || this.props.user} editProfile={this.editProfile} />
        ) : (
          <UserInfoForm
              user={user || this.props.user}
              editProfile={this.editProfile}
              newDataHandler={this.newDataHandler}  />
        )}
      </div>
    );
  }
}
