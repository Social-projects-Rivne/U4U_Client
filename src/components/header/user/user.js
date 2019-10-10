import React from "react";
import { Link } from 'react-router-dom';
import './user.scss';
import avatar from '../../../img/avatar.svg';

const User = () => {
  return (
    <div className="header__user">
      <div className="header__user-avatar">
        <img src={avatar} alt="user avatar" />
			</div>

      <div className="header__user-data">
        <h5>Welcome, User</h5>
        <Link to="/my-profile" className="header__profile">Your profile</Link>
        <Link to="/sign-out">Sign Out</Link>
      </div>
    </div>
  )
}

export default User