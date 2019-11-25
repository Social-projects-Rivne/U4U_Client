import React, { Component } from 'react';
import CommentViewList from './comment-view-list/comment-view-list';
import reviewService from '../../../services/review-service';
import './comment-view-section.scss';

export default class CommentViewSection extends Component {
  constructor() {
    super();
    this.state = {
      CommentViewList: []
    };
  }
  async componentDidMount() {
    try {
      const { placeId, commentQuantity } = this.props;
      const comments = await reviewService.getAllComments(placeId);
      this.setState({
        CommentViewList: comments
      });
      commentQuantity(comments.length)
    } catch (error) {
      console.log('Handle loading all comments error: ', error);
    }
  }

  render() {
    return (
      <div className="comment-view-section" id="comments">
        <div>
          <CommentViewList commentList={this.state.CommentViewList} />>
        </div>
      </div>
    );
  }
}
