import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './../../img/logo.svg';
import search from './../../img/search.svg';
import Guest from './guest';
import User from './user';
import isAuth from "../hocs/is-auth";

const Header = ({ isAuth }) => {
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
            <Link to="/myplans/:id">
              MyPlans
            </Link>

            <Link to="/places-list">
              Places List
            </Link>
          </nav>

          <div className="header__fields">
            {isAuth ? <User />  : <Guest /> }

            <li className="header__search">
              <Link to="/search">
                <img src={search} alt="search" />
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>)
};

export default isAuth(Header);