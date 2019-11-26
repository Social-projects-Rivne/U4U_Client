import React, { Component } from "react";
import UserService from "../../../../services/user-service"

import "./user-info-form.scss";

export default class UserInfoForm extends Component {
  user = {};

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      surname: this.props.user.surname,
      nickname: this.props.user.nickname,
      email: this.props.user.email
    };
    if (!props.user) {
      console.log(props.user);
    }
  }

  editUserData = (body) => {
    UserService.editUserData(body).then(user => {
      this.setState(user);
      this.props.newDataHandler(user)
    }).catch(console.error)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const profileData = [
      { id: "name", value: this.state.newUserName },
      { id: "surname", value: this.state.newSurName },
      { id: "nickname", value: this.state.newNickName },
      { id: "email", value: this.state.newEmail }
    ];

    const body = new Object()
    for (const field of profileData) {
      if (!!field.value) {
        body[field.id] = field.value
      }
    }
    console.log(body);
    this.editUserData(body);
  };

  handleUserName = (event) => {
    this.setState({
      newUserName: event.target.value
    })
  };

  handleSurName = (event) => {
    this.setState({
      newSurName: event.target.value
    })
  };

  handleNickName = (event) => {
    this.setState({
      newNickName: event.target.value
    })
  };

  handleEmail = (event) => {
    this.setState({
      newEmail: event.target.value
    })
  };

  render() {
    if (this.props.user) {
      return (
        <form className="user-info-form" onSubmit={this.handleSubmit}>
          <div className="user-info-center">
            <div className="user-info_center-group">
              <span>Name</span>
              <input
                className="user-info-name"
                type="text"
                name="name"
                onChange={this.handleUserName}
                defaultValue={this.state.name} />
            </div>
            <div className="user-info_center-group">
              <span>Surname</span>
              <input
                  className="user-info-surname"
                  type="text"
                  name="surname"
                  onChange={this.handleSurName}
                  defaultValue={this.state.surname} />
            </div>
            <div className="user-info_center-group">
              <span>Nickname</span>
              <input
                className="user-info-nickname"
                type="text"
                name="nickname"
                onChange={this.handleNickName}
                defaultValue={this.state.nickname} />
            </div>
            <div className="user-info_center-group">
              <span>Email</span>
              <input
                  className="user-info-email"
                  type="text"
                  name="email"
                  onChange={this.handleEmail}
                  defaultValue={this.state.email} />
            </div>
          </div>
          <div className="user-info-right">
            <div className="user-info_center-group">
              <span>Birth date</span>
              <input type="password" name="name" value={this.props.user.birth_date}/>
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
                <button
                  className="user-info-button"
                  onClick={this.props.editProfile}
                >
                  View profile
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return <div></div>;
      //show spinner here return (<Spinner>);
    }
  }
}
