import React, { Component } from 'react';
import CommentBody from './comment-body/comment-body';
import './comment-section.scss';

export default class CommentSection extends Component {
  render() {
    const { placeId } = this.props;
    return (
      <div className = 'comment-section global-white-layout'>
        <CommentBody placeId={ placeId } />
      </div>
    )
  }
}

