import React from 'react';
import './Header.scss';
import logo from './../../img/logo.svg';
import search from './../../img/search.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} alt="Ukraine 4 you" />
				</div>

        <nav className="header__nav">
          <ul>
            <li>
              <a href="#">MyPlans</a>
            </li>

            <li>
              <a href="#">Places List</a>
            </li>
          </ul>

          <ul>
            <li className="header__search">
              <img src={search} alt="search" />
						</li>

            <li>
              <a href="#">Sign In</a>
            </li>

            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>)
};

export default Header;