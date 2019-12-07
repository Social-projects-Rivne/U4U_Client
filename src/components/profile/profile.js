import React, { Component } from "react";
import UserInfoSection from "./user-info-section";
import AddPlace from "./add-place";
import BlockUserMessage from '../utils/block-user-message';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/auth-context';
import "./profile.scss";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.user) {
      return (
        <AuthConsumer>
      {(context) => (<div className="profile-container">
           <div className="profile">
            <UserInfoSection user={this.props.user} />
           { context.userStatus?<div id = 'user-block'><BlockUserMessage/></div>: <AddPlace /> }
          </div>
        </div>)}
      </AuthConsumer>
      );
    } else {
      return <Redirect to='/login' />
    }
  }
}
