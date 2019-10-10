import React, { Component } from 'react';
import CommentBody from './comment-body/comment-body';
import CommentDate from './comment-date/comment-date';
import CommentAuthorMark from './comment-author-mark/comment-author-mark';
import CommentAuthorName from './comment-author-name/comment-author-name';
import CommentAuthorPhoto from './comment-author-photo/comment-author-photo';
import './comment-section.scss';

export default class CommentSection extends Component {
  render() {
    return (
      <div className = 'comment-section'>
        <CommentBody />
        {/* <CommentDate /> 
        <CommentAuthorMark />
       <CommentAuthorName />
       <CommentAuthorPhoto /> */}
      </div>
    )
  }
}

