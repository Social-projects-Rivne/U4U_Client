import React, { Component } from "react";

import "./user-info.scss";

export default class UserInfo extends Component {
  render() {
    const {
      editProfile
    } = this.props;
    
    return (
      <div className="user-info">
        <div className="user-info-center">
          <label>Name</label>
          <span className="user-info-name">Viktor</span>
          <label>Surname</label>
          <span className="user-info-surname">Poliushko</span>
          <label>Nickname</label>
          <span className="user-info-nickname">Viktor123</span>
          <label>Email</label>
          <span className="user-info-email">test@gmail.com</span>
        </div>
        <div className="user-info-right">
          <label>Places traveled</label>
          <span className="">123</span>
          <label>Birth date</label>
          <span className="">123.123.123</span>
          <label>Business Account</label>
          <span className="">No</span>
          <div className="user-info-edit">
            <button className="user-info-edit" onClick={editProfile}>
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}