import React, { Component } from 'react';
import CommentViewList from './comment-view-list/comment-view-list';
import './comment-view-section.scss';

export default class CommentViewSection extends Component {
  render() {
    const { commentList } = this.props;
    return (
      <div className="comment-view-section">
        <div>
          <CommentViewList commentList={commentList} />
        </div>
      </div>
    );
  }
}
