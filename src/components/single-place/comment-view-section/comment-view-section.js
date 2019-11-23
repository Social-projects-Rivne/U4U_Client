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
          <CommentViewList commentList={this.state.CommentViewList} />
        </div>
      </div>
    );
  }
}
