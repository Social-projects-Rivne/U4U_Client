import React, { Component } from 'react';
import './comment-view-item.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default class CommentViewItem extends Component {
  dateConvert = (date) => {
    let now = new Date()
    let commentDate = new Date(date)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = (commentDate.getDate() === now.getDate())
    let yesterday = (commentDate.getDate() === now.getDate() - 1)
    let day

    if (today) {
      day = "Today"
    } else if (yesterday) {
      day = "Yesterday"
    } else {
      day = (`${commentDate.getDate()} ${months[commentDate.getMonth()]} ${commentDate.getFullYear()}`)
    }

    return (`${day} at ${commentDate.getHours()}:${commentDate.getMinutes()}`)
  }

  userAvatar = (ava) => {
    if (ava) {
      return <img src={ava} alt="avatar" />
    } else {
      return <FontAwesomeIcon icon={faUserAstronaut} />
    }
  }

  render() {
    const { rating, createdAt, comment, userNickname, userAvatar } = this.props;

    return (
      <li className="comment-view-element white-layout">
        <div className="comment-view-header">
          <div className="comment-view-left">
            <div className="comment-view-avatar">
              {this.userAvatar(userAvatar)}
            </div>

            <div className="comment-view-nickname">
              {userNickname}
            </div>

            <div className="comment-view-date">
              {this.dateConvert(createdAt)}
            </div>
          </div>

          <div className="comment-view-right">
            <div className="comment-view-rating">
              <span>{rating}</span>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>

        <div className="comment-view-text">
          <p>
            {comment}
          </p>
        </div>
      </li>
    );
  }
}
