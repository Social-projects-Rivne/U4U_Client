import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
 
import './button-loading-more.scss';

export default class ButtonLoadingMore extends Component {
    render() {
        return (
            <div className='button-loading-more'>
                <div className='button-loading-more-container'>
                    <div className='button-loading-more-container-icon'>
                        <FontAwesomeIcon icon={faSpinner} size='3x'/>
                    </div>
                    <div className='button-loading-more-container-title'>
                        <label className='button-loading-more-label'>Loading more</label>
                    </div>
                </div>
            </div>
        )
    }
}
