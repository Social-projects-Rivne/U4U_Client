import React, { Component } from "react";
import UserService from "../../../../services/user-service"

import "./user-info-form.scss";

export default class UserInfoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        name:       this.props.user ? this.props.user.name        : "",
        surname:    this.props.user ? this.props.user.surname     : "",
        nickname:   this.props.user ? this.props.user.nickname    : "",
        email:      this.props.user ? this.props.user.email       : "",
        birthDate:  this.props.user ? this.props.user.birth_date  : "",
      }
    };
  }

  editUserData = (body) => {
    UserService.editUserData(body).then(user => {
      this.props.newDataHandler(user)
    }).catch(console.error)
  };

  handleSubmit = () => {
    const newUserData = {};

    for (let [key, value] of Object.entries(this.state.fields)) {
      newUserData[key] = value;
    }
    
    this.editUserData(newUserData);
  };

  handleUserName = (value) => {
    if (value) {
      this.setState(prevState => ({
        fields: {
            ...prevState.fields,
            name: value
        }
      }));
    }
  };

  handleSurName = (value) => {
    if (value) {
      this.setState(prevState => ({
        fields: {
            ...prevState.fields,
            surname: value
        }
      }));
    }
  };

  handleNickName = (value) => {
    if (value) {
      this.setState(prevState => ({
        fields: {
            ...prevState.fields,
            nickname: value
        }
      }));
    }
  };

  handleEmail = (value) => {
    if (value) {
      this.setState(prevState => ({
        fields: {
            ...prevState.fields,
            email: value
        }
      }));
    }
  };

  handleBirthDate = (value) => {
    if (value) {
      this.setState(prevState => ({
        fields: {
            ...prevState.fields,
            birthDate: Date(value)
        }
      }));
    }
  };

  render() {
    return (
      this.props.user
      ?
        <form className="user-info-form">
          <div className="user-info-left">
            <div className="user-info_center-group">
              <label>Name:</label>
              <input
                className="user-info-name global-input-text"
                type="text"
                name="name"
                onInput={(e) => this.handleUserName(e.target.value)}
                defaultValue={this.state.fields.name} />
            </div>
            <div className="user-info_center-group">
              <label>Surname:</label>
              <input
                  className="user-info-surname global-input-text"
                  type="text"
                  name="surname"
                  onInput={(e) => this.handleSurName(e.target.value)}
                  defaultValue={this.state.fields.surname} />
            </div>
            <div className="user-info_center-group">
              <label>Nickname:</label>
              <input
                className="user-info-nickname global-input-text"
                type="text"
                name="nickname"
                onInput={(e) => this.handleNickName(e.target.value)}
                defaultValue={this.state.fields.nickname} />
            </div>
            <div className="user-info_center-group">
              <label>Email:</label>
              <input
                  className="user-info-email global-input-text"
                  type="email"
                  name="email"
                  onInput={(e) => this.handleEmail(e.target.value)}
                  defaultValue={this.state.fields.email} />
            </div>
          </div>
          <div className="user-info-right">
            <div className="user-info_center-group">
              <label>Birth date:</label>
              <input 
                type="date" 
                name="birthDate"
                className="global-input-text"
                onInput={(e) => this.handleBirthDate(e.target.value)}
                defaultValue={this.state.fields.birthDate} />
            </div>
            <div className="user-info_center-group">
              <label>New password:</label>
              <input type="password" className="global-input-text" name="name" />
            </div>
            <div className="user-info_center-group">
              <label>Repeat password:</label>
              <input type="password" className="global-input-text" name="name" />
            </div>
          </div>
        </form>
      : ""
    );
  }
}
