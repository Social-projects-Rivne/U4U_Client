import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './user.scss';
import avatar from '../../../img/avatar.svg';
import api from '../../../services/tourist-service';

const User = ({ onAuth }) => {

    const [logOut, setLogOut] = useState(null);

    const handleLogOut = () => {
        api.logOut()
            .then(res => {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                localStorage.removeItem('prevPath');
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
        <h5>Welcome, User</h5>
        <Link to="/my-profile" className="header__profile">Your profile</Link>
        <span className='log-out-btn' onClick={handleLogOut}>Sign Out</span>
      </div>
    </div>
  )
}

export default User