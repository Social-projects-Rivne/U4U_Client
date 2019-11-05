import React, { Component } from "react";

import "./user-info-form.scss";

export default class UserInfoForm extends Component {
  render() {
    const { editProfile } = this.props;

    return (
      <form className="user-info-form" action="">
        <div className="user-info-center">
          <div className="user-info_center-group">
            <span>Name</span>
            <input className="user-info-name" type="text" name="name" />
          </div>
          <div className="user-info_center-group">
            <span>Surname</span>
            <input className="user-info-surname" type="text" name="surname" />
          </div>
          <div className="user-info_center-group">
            <span>Nickname</span>
            <input className="user-info-nickname" type="text" name="nickname" />
          </div>
          <div className="user-info_center-group">
            <span>Email</span>
            <input className="user-info-email" type="text" name="email" />
          </div>
        </div>
        <div className="user-info-right">
          <div className="user-info_center-group">
            <span>Birth date</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info_center-group">
            <span>New password</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info_center-group">
            <span>Repeat password</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info_center-group buttons">
            <div className="user-info-submit">
              <input className="user-info-button" type="submit" />
            </div>
            <div className="user-info-view">
              <button className="user-info-button" onClick={editProfile}>
                View profile
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
