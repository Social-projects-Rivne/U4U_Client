import React, { Component } from 'react';
import './comment-body.scss';

export default class CommentBody extends Component {
  render() {
    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form action="" method="post">
          <textarea name='comment' placeholder='Tell something about this place, please :)'></textarea>
          <input type='submit' value='Comment' id='comment-button' ></input>
        </form>
      </div>
    )
  }
}
