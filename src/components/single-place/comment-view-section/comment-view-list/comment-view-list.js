import React, { Component } from 'react';
import CommentViewItem from '../comment-view-item/comment-view-item';
import './comment-view-list.scss';

export default class CommentViewList extends Component {
  render() {
    const { commentList } = this.props;
    const elements = commentList.map(item => {
      const { _id, ...itemProps } = item;
      
      return ( 
        <CommentViewItem {...itemProps} key={_id}/>
      );
    });

    if (commentList.length === 0) {
      return <p className="comment-view-nocomment">We are sorry, but there are no comments, you can be the first.</p>;
    } else {
      return <ul>{elements}</ul>;
    }
  }
}
