import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './GeneralRating.scss';

export default class GeneralRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      starsSelected: 0
    };
  };

  handleStarHover = () => {
    this.setState({
      hover: true,

    })
  }

  handleStarBlur = () => {
    this.setState({
      hover: false
    })
  }

  onStarClick = () => {

  }
  render() {
    const starsCount = [1, 2, 3, 4, 5];
    return (
      <div className='all-stars-container' >
        {starsCount.map(index => (
          <div key={index} className='star-container'
            style={{ color: this.state.hover ? 'yellow' : 'white' }}
            onMouseEnter={this.handleStarHover}
            onMouseLeave={this.handleStarBlur}>
            <FontAwesomeIcon icon={faStar} size="2x" />
          </div>
        )
        )}
      </div>
    )
  }
}

