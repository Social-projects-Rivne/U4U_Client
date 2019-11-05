import React, { Component } from 'react';
import CommentViewItem from '../comment-view-item/comment-view-item';
import './comment-view-list.scss';

export default class CommentViewList extends Component {
  render() {
    const { commentList, placeId } = this.props;
    console.log(placeId);
    const elements = commentList.map(item => {
      const { ...itemProps } = item;
      return (
        <li>
          <CommentViewItem {...itemProps} />
        </li>
      );
    });
    if (commentList.length === 0) {
      return <p>No comments</p>;
    } else {
      return <ul>{elements}</ul>;
    }
  }
}
