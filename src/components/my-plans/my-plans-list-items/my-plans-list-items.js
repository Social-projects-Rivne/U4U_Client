import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import PlansListService from '../../../services/plans-list-service';
import './my-plans-list-items.scss';

export default class MyPlansListItems extends Component {
  constructor(props) {
    super(props);
    this.service = new PlansListService();
    const { done, inProgress, _id, placeId, placeName, onDeleted } = this.props;
    this.state = {
      done,
      placeId,
      placeName,
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
    const { placeId, placeName, done, onDeleted, important } = this.state;
    let classNames = 'plans-list-item';
    if (done) {
      classNames += ' my-plans-item_done';
    }
    if (important) {
      classNames += ' my-plans-item_important';
    }
    return (
      <span id='list-item-style' className={classNames}>
        <Link to={`/singleplace/${placeId}`} className="plans-list-item">
            {placeName}
        </Link>
        <div className='list-item-icons'>
          <div 
            className='my-plans-icon'
            onClick={this.onLabelVisitedClick}>

            <FontAwesomeIcon icon={done ? faCheckSquare : faSquare}/>
          </div>

          <div 
            className='my-plans-icon'
            onClick={this.onLabelImportant}>

            <FontAwesomeIcon icon={important ? faExclamationCircle : faExclamation}/>
          </div>
          
          <div
            className='my-plans-icon'
            onClick={onDeleted}>

            <FontAwesomeIcon icon={faTrashAlt}/>
          </div>
        </div>
      </span>
    )
  };
};