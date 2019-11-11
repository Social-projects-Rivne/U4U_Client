import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './../../img/logo.svg';
import Guest from './guest';
import User from './user';
import UserAvatarSmallSkeleton from '../utils/user-avatar-small-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = ({ startAuth, user, onAuth }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Ukraine 4 you" />
          </Link>
        </div>

        <div className="header__nav">
          <nav className="header__navbar">
            <Link to="/">
              Map
            </Link>

            <Link to="/myplans/:id">
              MyPlans
            </Link>

            <Link to="/places-list">
              Places List
            </Link>
          </nav>

          <div className="header__fields">
            {
              startAuth 
                ? <UserAvatarSmallSkeleton /> 
                : user 
                  ? <User user={user} onAuth={onAuth}  /> 
                  : <Guest /> 
            }

            <li className="header__search">
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} size='2x'/>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>)
};

export default Header;