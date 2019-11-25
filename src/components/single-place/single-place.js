import React, { Component } from 'react';
import AsideSection from './aside-section/aside-section';
import MainSection from './main-section/main-section';
import CommentSection from './comment-section/comment-section';
import CommentViewSection from './comment-view-section/comment-view-section';
import Api from './../../services/places-service';
import Spinner from './../../components/utils/spinner';
import './single-place.scss';
// import reviewService from '../../services/review-service';

export default class SinglePlace extends Component {
  state = {
    place: null,
    commentQuantity: 0
  };

  async componentDidMount() {
    try {
      const {
        match: { params }
      } = this.props;
      const placeId = params.id;

      const placett = await Api.getPlace(placeId);
      this.setState({ place: placett });
    } catch (error) {
      console.log('Handle get single plase error:', error);
    }
  }

  commentQuantity = (value) => {
    this.setState({ commentQuantity: value });
  }

  render() {
    const loading = !this.state.place ? false : true;

    const {
      match: { params }
    } = this.props;
    const placeId = params.id;

    return (
      <div className="single-place">
        <div className="main-comment-sections">
          {loading ? (
            <div>
              <MainSection place={this.state.place} commentQuantity={this.state.commentQuantity} />
            </div>
          ) : (
            <Spinner />
          )}
          <CommentSection placeId={placeId} />
          <CommentViewSection placeId={placeId} commentQuantity={this.commentQuantity} />
        </div>
        <AsideSection />
      </div>
    );
  }
}
