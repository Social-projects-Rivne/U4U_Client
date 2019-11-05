import React, { Component } from 'react';
import CommentViewList from './comment-view-list/comment-view-list';
//import CommentViewUser from './comment-view-user/comment-view-user';
//import CommentViewRating from './comment-view-rating/comment-view-rating';
//import CommentViewDate from './comment-view-date/comment-view-date';
//import CommentViewBody from './comment-view-body/comment-view-body';
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
      const { placeId } = this.props;
      const comments = await reviewService.getAllComments(placeId);
      this.setState({ CommentViewList: comments });
    } catch (error) {
      console.log('Handle loading all comments error: ', error);
    }
  }

  render() {
    return (
      <div className="comment-view-section">
        <div>
          <CommentViewList commentList={this.state.CommentViewList} />>
        </div>
      </div>
    );
  }
}
