import React, { Component } from 'react';
import CommentBody from './CommentBody/CommentBody';
import CommentDate from './CommentDate/CommentDate';
import CommentAuthorMark from './CommentAuthorMark/CommentAuthorMark'
import CommentAuthorName from './CommentAuthorName/CommentAuthorName';
import CommentAuthorPhoto from './CommentAuthorPhoto/CommentAuthorPhoto';
import './CommentSection.scss';

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

