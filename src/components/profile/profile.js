import React, { Component } from "react";
import UserInfoSection from "./user-info-section";
import AddPlace from "./add-place";
import TokenService from './../../services/token-service';
import { Redirect } from 'react-router-dom';

import "./profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  
  render() {
    const accessToken = TokenService.getToken();

    if (accessToken) {
      return (
        <div className="profile-container">
            <div className="profile">
            <UserInfoSection user={this.props.user} />
            <AddPlace />
          </div>
        </div>
      );
    } else {
      return <Redirect to='/login' />
    }
  }
}
