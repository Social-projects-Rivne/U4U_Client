import React, { Component } from 'react';
import './comment-body.scss';
import api from '../../../../services/review-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class CommentBody extends Component {

  state = {
    comment: null,
    commentError: false,
    mark: null,
    selected: false,
    hoverStars: null
  }

  mark = (value) => {
    this.setState({ mark: value, selected: true, commentError: false });
  }

  onChange = () => {
    this.setState({ selected: false, mark: null })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { comment, mark } = this.state;
    if (comment.length <= 2 || mark === null) {
      this.setState({ commentError: true })
    }
    else {
      this.setState({ commentError: false })

      const jwt = localStorage.getItem('token');
      const { placeId } = this.props;
      const { mark } = this.state;

      api.comment({ userJwt: jwt, comment: comment, placeId: placeId, rating: mark })
        .then(() => {
          console.log('Success');
          this.setState({
            comment: '',
            commentError: false,
            mark: null,
            selected: false
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  onComment = (e) => {
    this.setState({ comment: e.target.value });
  }

  starEnter = (value) => {
    this.setState({ hoverStars: value })
  }

  starLeave() {
    this.setState({ hoverStars: null })
  }

  stars() {
    const starsArr = []
    const { hoverStars } = this.state
    for (let i = 1; i <= 5; i++) {
      let sClass = 'stars'

      if (hoverStars >= i) {
        sClass += ' hover'
      }

      starsArr.push(
        <FontAwesomeIcon
          icon={faStar}
          className={sClass}
          onClick={() => this.mark(i)}
          onMouseEnter={()=>this.starEnter(i)}
          onMouseLeave={()=>this.starLeave()}
        />
      )
    }
    return starsArr
  }

  render() {
    const { commentError, selected, mark, comment } = this.state;
    const stars = this.stars()

    const rating = selected ? 'd-none' : 'rating-container';
    const message = selected ? 'thanks_message' : 'd-none';

    const error = commentError ? 'Pleace enter comment and mark' : '';
    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form onSubmit={this.onSubmit}>
          <textarea required name='comment' value={comment} placeholder='Tell something about this place, please :)' className='comment' onChange={this.onComment}></textarea>
          <p className='message'>{error}</p>
          <div className={rating}>
            {stars}
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
