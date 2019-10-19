import React, { Component } from "react";
import "./profile.scss";

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="welcome-header">
          <h1 className="user-name">Welcome, </h1>
        </div>
        <div className="user-info-section">
          <div className="avatar-section">
            <img
              className="avatar"
              src="https://oc2.ocstatic.com/images/logo_small.png"
              alt="avatar"
            />
          </div>
          <form action="">
            <div className="user-info-center">
              <span>Name</span>
              <input className="user-info-name" type="text" name="name" />
              <span>Surname</span>
              <input className="user-info-surname" type="text" name="surname" />
              <span>Nickname</span>
              <input
                className="user-info-nickname"
                type="text"
                name="nickname"
              />
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
        </div>
        <div className="add-place">
          <form className="add-place-form">
            <h1 className="add-place-header">Add your place</h1>
            <select className="district-selector">
              <option>Choose district</option>
              <option>Rivnenska</option>
              <option>Kyivska</option>
            </select>
            <input className="add-place-title" type="text" name="title" />
            <textarea
              name="add-place-description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input className="add-place-file" type="file" />
          </form>
        </div>
      </div>
    );
  }
}
