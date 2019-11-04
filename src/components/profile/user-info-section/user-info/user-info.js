import React, { Component } from "react";
import Api from "../../../../services/user-service";

import "./user-info.scss";

export default class UserInfo extends Component {
  state = {
    user: null
  };
  async componentDidMount() {
    try {
      console.log(Api.getUserData());
      const user = await Api.getUserData();
      this.setState({ user: user });
    } catch (error) {
      console.log("User search error: ", error);
    }
  }

  render() {
    return (
      <div className="user-info">
        <div className="user-info-center">
          <div className="user-info_center-group">
            <label>Name</label>
            <span className="user-info-name">
              {console.log(this.state.user)}
            </span>
          </div>
          <div className="user-info_center-group">
            <label>Surname</label>
            <span className="user-info-surname">Poliushko</span>
          </div>
          <div className="user-info_center-group">
            <label>Nickname</label>
            <span className="user-info-nickname">Viktor123</span>
          </div>
          <div className="user-info_center-group">
            <label>Email</label>
            <span className="user-info-email">test@gmail.com</span>
          </div>
        </div>
        <div className="user-info-right">
          <div className="user-info_center-group">
            <label>Places traveled</label>
            <span className="">123</span>
          </div>
          <div className="user-info_center-group">
            <label>Birth date</label>
            <span className="">123.123.123</span>
          </div>
          <div className="user-info_center-group">
            <label>Business Account</label>
            <span className="">No</span>
          </div>
          <div className="user-info_edit">
            <button
              className="user-info__edit-button"
              onClick={this.props.editProfile}
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
    );
  }
}
