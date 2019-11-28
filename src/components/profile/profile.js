import React, { Component } from "react";
import UserInfoSection from "./user-info-section";
import AddPlace from "./add-place";

import "./profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);
 
    if(!props.user) {
      
    }

    this.state = {
      user: null
    };
  }
  
  render() {
    return (
      <div className="profile-container">
         <div className="profile">
          <UserInfoSection user={this.props.user} />
          <AddPlace />
        </div>
      </div>
    );
  }
}
