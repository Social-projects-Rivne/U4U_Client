import React, { Component } from 'react';
import './comment-body.scss';
import api from '../../../../services/review-service';
import Rating from '../../../utils/rating-stars';

export default class CommentBody extends Component {

  state = {
    comment: null,
    commentError: false,
    mark: null
  }

  mark = (value) => {
    this.setState({ mark: value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {comment} = this.state;
    if(comment.length <= 2){
      this.setState({commentError: true})
    }
    else{
      this.setState({commentError: false})

      const jwt = localStorage.getItem('token');
      const { mark } = this.state;

      //place Id is hardcode becouse we have not place ID from main page, Rating is hardCode becouse we havenot rating stars component
      api.comment({userJwt: jwt, comment: comment, placeId:'5d8f77580b43e2050ca9d43f', rating: mark}) // --- hardcode
      .then(() => {
          console.log('Success');
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  onComment = (e) => {
    this.setState({comment: e.target.value});
  }

  render() {
    const {commentError} = this.state;

    const error = commentError ? 'Comment length must be bigger then 2' : '';
    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form onSubmit={this.onSubmit}>
          <textarea name='comment' placeholder='Tell something about this place, please :)' className='comment' onChange={this.onComment}></textarea>
          <p className='message'>{error}</p>
          <div className='rating-container'>
            <Rating value={1} onStar={this.mark} />
            <Rating value={2} onStar={this.mark} />
            <Rating value={3} onStar={this.mark} />
            <Rating value={4} onStar={this.mark}/>
            <Rating value={5} onStar={this.mark}/>
          </div>
          <input type='submit' id='comment-button' value='Send'></input> 
        </form>
      </div>
    )
  }
}
