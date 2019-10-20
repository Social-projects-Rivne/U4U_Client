import React, { Component } from 'react';
import './comment-body.scss';
import api from '../../../../services/review-service';


export default class CommentBody extends Component {

  state = {
    comment: null,
    rating: null,
  }

  onSubmith = (e) => {
    e.preventDefault();
    const {comment, rating} = this.state;
    const jwt = localStorage.getItem('token');

    // place Id is hardcode becouse we have not place ID from main page, Rating is hardCode becouse we havenot rating stars component
    api.comment({userJwt: jwt, comment: comment, placeId:'5d8f77580b43e2050ca9d43f', rating: 5}) // --- hardcode
    .then(() => {
      console.log('Success');
    })
    .catch((err) => {
      this.setState(({errorComment: err}));
    })
  }

  onCommentChange = (e) => {
    this.setState({ comment: e.target.value })
  };

  onRatingChange = (e) => {
    this.setState({ rating: 5 }) // --- hardcode
  }

  render() {
    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form onSubmit={this.onSubmith}>
          <textarea name='comment' placeholder='Tell something about this place, please :)' onChange={this.onCommentChange}></textarea>
          <p className='message'>{}</p>
          <input type='submit' value='Comment' id='comment-button'></input>
        </form>
      </div>
    )
  }
}
