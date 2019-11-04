import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './user.scss';
import avatar from '../../../img/avatar.svg';
import api from '../../../services/tourist-service';
import TokenService from '../../../services/token-service';

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

    if(logOut) return <Redirect to='/' />;

  return (
    <div className="header__user">
      <div className="header__user-avatar">
        <img src={avatar} alt="user avatar" />
			</div>

      <div className="header__user-data">
        <h5>Welcome, {user ? user.nickname : ''}</h5>
        <Link to="/profile" className="header__profile">Your profile</Link>
        <span className='log-out-btn' onClick={handleLogOut}>Sign Out</span>
      </div>
    </div>
  )
}

export default User