import React, { Component } from 'react';
import './comment-view-item.scss';
//import api from '../../../../services/review-service';

export default class CommentViewItem extends Component {
  render() {
    const { userId, rating, createdAt, comment } = this.props;
    return (
      <div className="grid-container">
        <div className="user">{userId}</div>
        <div className="rating">{rating}</div>
        <div className="date"> {createdAt} </div>
        <div className="body">{comment}</div>
      </div>
    );
  }
}
