import React, { Component } from "react";

import "./user-info-form";

export default class UserInfoForm extends Component {
  render() {
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
          <span>Old password</span>
          <input className="user-info-oldpass" type="text" name="name" />
          <span>New password</span>
          <input className="user-info-newpass" type="text" name="name" />
          <span>Repeat password</span>
          <input className="user-info-repeatpass" type="text" name="name" />
        </div>
      </form>   
    );
  }
}
