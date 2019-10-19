import React, { Component } from "react";
import "./welcome-header.scss";

export default class WelcomeHeader extends Component {
  render() {
    return (
      <div className="welcome-header">
        <h1 className="user-name">Welcome, </h1>
      </div>
    );
  }
}
