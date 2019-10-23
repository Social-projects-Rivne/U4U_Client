import React, { Component } from 'react';
import './comment-body.scss';
import api from '../../../../services/review-service';
import Rating from '../../../utils/rating-stars';

export default class CommentBody extends Component {

  state = {
    comment: null,
    commentError: false,
    mark: null,
    selected: false
  }

  mark = (value) => {
    this.setState({ mark: value, selected: true, commentError: false });
  }

  onChange = () => {
    this.setState({selected: false, mark: null})
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {comment, mark} = this.state;
    if(comment.length <= 2 || mark === null){
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
    const {commentError, selected, mark} = this.state;

    const rating = selected ? 'd-none' : 'rating-container';
    const message = selected ? 'thanks_message' : 'd-none';

    const error = commentError ? 'Pleace enter comment and mark' : '';
    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form onSubmit={this.onSubmit}>
          <textarea required name='comment' placeholder='Tell something about this place, please :)' className='comment' onChange={this.onComment}></textarea>
          <p className='message'>{error}</p>
          <div className={rating}>
            <Rating value={1} onStar={this.mark} />
            <Rating value={2} onStar={this.mark} />
            <Rating value={3} onStar={this.mark} />
            <Rating value={4} onStar={this.mark}/>
            <Rating value={5} onStar={this.mark}/>
          </div>
          <div className={message}>
            <p className='message_thanks'>Thanks for your mark " {mark} " <i onClick={this.onChange} className='revert'>&#8634;</i></p>
          </div>
          <input type='submit' id='comment-button' value='Send'></input> 
        </form>
      </div>
    )
  }
}
