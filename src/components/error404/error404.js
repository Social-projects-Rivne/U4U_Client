import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import ManShrugging from './../../img/1f937-2642.png';
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
            <span>
              Sorry, page not found!
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
                <image xlinkHref={ManShrugging}/>
              </svg>
            </span>
            <Link to="/">Go to home page</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error404