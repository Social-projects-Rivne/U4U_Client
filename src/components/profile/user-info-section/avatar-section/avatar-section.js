import React, { Component } from "react";

import "./avatar-section.scss";

export default class AvatarSection extends Component {
  render() {
    return (
      <div className="avatar-section">
        <img
          className="avatar"
          src="https://oc2.ocstatic.com/images/logo_small.png"
          alt="avatar"
        />
      </div>
    );
  }
}
