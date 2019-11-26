import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './user.scss';
import api from '../../../services/tourist-service';
import TokenService from '../../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const User = ({ user, onAuth }) => {

    const [logOut, setLogOut] = useState(null);

    const handleLogOut = () => {
        api.logOut()
            .then(res => {
                TokenService.removeToken();
                TokenService.removeRefreshToken();
                setLogOut(true);
                onAuth('');
            })
            .catch(err => {
                setLogOut('');
                alert('Cannot log out');
            });
    };

  return (
    <div className="header__user">
      <div className="header__user-data">
        <Link to="/profile" className="header__user-data-profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/" className='header__user-data-log-out' onClick={handleLogOut}>
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </div>
    </div>
  )
}

export default User