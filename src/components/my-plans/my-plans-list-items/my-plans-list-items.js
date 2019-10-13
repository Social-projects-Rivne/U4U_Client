import React, {Component } from 'react';
import './my-plans-list-items.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
export default class MyPlansListItems extends Component{
    state = {
        done: false,
        important: false
      };
    
      onLabelClick = () => {
        this.setState(({done}) => {
          return {
            done: !done
          };
        });
      };
    
      onMarkImportant = () => {
        this.setState(({important}) => {
          return {
            important: !important
          };
        });
      };
    
      
    render(){
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
    
        let classNames = 'plans-list-item';
        if (done) {
          classNames += ' done';
        }
    
        if (important) {
          classNames += ' important';
        }
      
        return(
            <span id = 'label-style' className = {classNames}>
            <span  className="plans-list-item-label">
                {label}
            </span>    

            <div className='icons'>
                <FontAwesomeIcon icon={faCheckSquare} 
                        className = 'my-plans-icon'
                        size="lg"
                        onClick = {this.onLabelClick}
                        />
                <FontAwesomeIcon icon={faExclamation} 
                         className = 'my-plans-icon'
                         size="lg"
                         onClick={this.onMarkImportant}
                         />
                <FontAwesomeIcon icon={faTrashAlt}
                         className = 'my-plans-icon'
                         size="lg"
                         onClick = {onDeleted}/>
                    </div>
            </span>
        )
    };
};