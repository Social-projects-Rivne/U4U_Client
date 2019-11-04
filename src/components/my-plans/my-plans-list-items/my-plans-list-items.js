import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import PlansListService from '../../../services/plans-list-service';
import './my-plans-list-items.scss';

export default class MyPlansListItems extends Component {
  constructor(props) {
    super(props);
    this.service = new PlansListService();
    const { done, inProgress, _id, comment, onDeleted } = this.props;
    this.state = {
      done,
      comment,
      onDeleted,
      important: inProgress,
      id: _id
    };
  }
  onLabelVisitedClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      };
    }, () => { this.service.markWish(this.state) }
    )
  };
  onLabelImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      };
    }, () => { this.service.markWish(this.state) }
    )
  };
  render() {
    const { comment, done, onDeleted, important } = this.state;
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
            size="sm"
            onClick={this.onLabelVisitedClick}
          />
          <FontAwesomeIcon icon={faExclamation}
            className='my-plans-icon'
            size="sm"
            onClick={this.onLabelImportant}
          />
          <FontAwesomeIcon icon={faTrashAlt}
            className='my-plans-icon'
            size="sm"
            onClick={onDeleted} />
        </div>
      </span>
    )
  };
};