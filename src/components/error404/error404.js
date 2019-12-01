import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../img/error404.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './error404.scss';

const Error404 = () => {
  return (
    <div className="error404-container">
      <div className="error404 global-white-layout">
        <div className="error404-content">
          <div className="error404-content-digits">
            <div>
              <span>4</span>
            </div>
            <div>
              <span>0</span>
            </div>
            <div>
              <span>4</span>
            </div>
            <div>
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
            </div>
          </div>
          <div className="error404-content-title">
            Sorry, page not found! <span role="img" aria-label="Man-Shrugging">🤷‍♂️</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404