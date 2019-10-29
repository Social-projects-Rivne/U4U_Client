import React, { Component } from "react";

import "./user-info-form.scss";

export default class UserInfoForm extends Component {
  render() {
    const {
      editProfile
    } = this.props;
    
    return (
      <form className="user-info-form" action="">
        <div className="user-info-center">
          <span>Name</span>
          <input className="user-info-name" type="text" name="name" />
          <span>Surname</span>
          <input className="user-info-surname" type="text" name="surname" />
          <span>Nickname</span>
          <input className="user-info-nickname" type="text" name="nickname" />
          <span>Email</span>
          <input className="user-info-email" type="text" name="email" />
        </div>
        <div className="user-info-right">
          <div className="user-info-oldpass">
            <span>Old password</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info-newpass">
            <span>New password</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info-repeatpass">
            <span>Repeat password</span>
            <input type="password" name="name" />
          </div>
          <div className="user-info-submit">
            <input className="user-info-submit" type="submit" />
          </div>
          <button className="user-info-edit" onClick={editProfile}>
              View profile
            </button>
        </div>
      </form>
    );
  }
}
