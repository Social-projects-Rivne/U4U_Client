import React, { Component } from "react";
import "./user-info.scss";

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {}
  }

  render() {
    return (
      this.props.user
      ?
        <div className="user-info">
          <section className="user-info-left">
            <div className="user-info_center-group">
              <label>Name:</label>
              <span className="user-info-name">{this.props.user.name}</span>
            </div>
            <div className="user-info_center-group">
              <label>Surname:</label>
              <span className="user-info-surname">{this.props.user.surname}</span>
            </div>
            <div className="user-info_center-group">
              <label>Nickname:</label>
              <span className="user-info-nickname">{this.props.user.nickname}</span>
            </div>
            <div className="user-info_center-group">
              <label>Email:</label>
              <span className="user-info-email">{this.props.user.email}</span>
            </div>
          </section>
          <section className="user-info-right">
            <div className="user-info_center-group">
              <label>Places traveled:</label>
              <span className="">123</span>
            </div>
            {this.props.user.birth_date ? 
              <div className="user-info_center-group">
                <label>Birth date</label>
                <span className="">{this.props.user.birth_date}</span>
              </div>
              : ''}
            <div className="user-info_center-group">
              <label>Business Account:</label>
              <span className="">{this.props.user.is_business ? "No" : "Yes"}</span>
            </div>
          </section>
        </div>
      : ""
    );
  }
}
