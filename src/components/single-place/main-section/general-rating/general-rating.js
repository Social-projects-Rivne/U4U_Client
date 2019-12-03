import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './general-rating.scss';

export default class GeneralRating extends Component {
  render() {
    const { ratingAvg } = this.props
    return (
      <div className='all-stars-container' >
        <FontAwesomeIcon icon={faStar} />
        <span>{ratingAvg}</span>
      </div>
    )
  }
}
