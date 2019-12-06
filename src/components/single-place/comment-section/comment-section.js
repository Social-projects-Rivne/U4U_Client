import React, { Component } from 'react';
import CommentBody from './comment-body/comment-body';
import BlockUserMessage from '../../utils/block-user-message';
import './comment-section.scss';

export default class CommentSection extends Component {
  render() {
    const { placeId } = this.props;
    const foo = true;
    return (
      <div className = 'comment-section global-white-layout'>
        {foo?<BlockUserMessage/>:<CommentBody placeId={ placeId } />}
      </div>
    )
  }
}

