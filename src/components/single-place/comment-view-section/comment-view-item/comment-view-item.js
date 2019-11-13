import React, { Component } from 'react';
import './comment-view-item.scss';

export default class CommentViewItem extends Component {
  render() {
    const { userEmail, rating, createdAt, comment } = this.props;
    return (
      <div className="grid-container">
        <div className="user">{userEmail}</div>
        <div className="rating">{rating}☆</div>
        <div className="date"> {createdAt}</div>
        <div className="body">{comment}</div>
      </div>
    );
  }
}
