import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './general-comments-number.scss';

export default class GeneralCommentsNumber extends Component {
  render() {
    return (
      <div className='comment-number-icon'>
        <a href="#comments">
          <span>{this.props.commentQuantity}</span>
          <FontAwesomeIcon icon={faComment} />
        </a>
      </div>
    )
  }  
}
