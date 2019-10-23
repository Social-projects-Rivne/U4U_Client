import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import './my-plans-list-items.scss';

export default class MyPlansListItems extends Component {
  state = {
    done: false,
    important: false
  };
  onLabelVisitedClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };
  onLabelImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    });
  };
  render() {
    const { comment, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = 'plans-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important';
    }
    return (
      <span id='list-item-style' className={classNames}>
        <span className="plans-list-item">
          {comment}
        </span>
        <div className='icons'>
          <FontAwesomeIcon icon={faCheckSquare}
            className='my-plans-icon'
            size="lg"
            onClick={this.onLabelVisitedClick}
          />
          <FontAwesomeIcon icon={faExclamation}
            className='my-plans-icon'
            size="lg"
            onClick={this.onLabelImportant}
          />
          <FontAwesomeIcon icon={faTrashAlt}
            className='my-plans-icon'
            size="lg"
            onClick={onDeleted} />
        </div>
      </span>
    )
  };
};