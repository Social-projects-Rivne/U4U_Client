import React, { Component } from "react";

import "./avatar-section.scss";

export default class AvatarSection extends Component {
  render() {
    return (
      <div className="avatar-section">
        <img
          className="avatar"
          src="https://news.artnet.com/app/news-upload/2015/06/duane_hanson_tourists_2-e1435570367600.jpg"
          alt="avatar"
        />
      </div>
    );
  }
}
