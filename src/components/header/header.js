import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Guest from './guest';
import User from './user';
import UserAvatarSmallSkeleton from '../utils/user-avatar-small-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import TabsBar from '../utils/tabs-bar';
import './header.scss';


export default class Header extends Component {
  constructor (props) {
    super (props);

    if (typeof props.startAuth === "undefined"
        || typeof props.user === "undefined" 
        || typeof props.onAuth === "undefined") {
      throw Error("This component cant exist without next props:\n startAuth,\n user,\n onAuth()\n")
    }

    this.state = {
      navbarTabs: [
        {
          id: 0,
          title: "Map", 
          url: "/",
          isActive: false
        },
        {
          id: 1,
          title: "My Plans", 
          url: "/myplans",
          isActive: false,
        },
        {
          id: 2,
          title: "Places List",
          url: "/places-list",
          isActive: false 
        }
      ]
    };
  }

  getActiveTab = (tab) => {
    if (tab.title === "Map") {
      document.documentElement.scrollTop = 0;
    }
  }

  render () {
    return (
      <header className="header">
          <div className="header__nav">
            <nav className="header__navbar">
              <div className="header__logo">
                <Link to="/" className="header__logo__link">
                  <div className="header__logo__link-abbreviation">
                    <div>
                      <span>U</span>
                    </div>
                    <div>
                      <span>4</span>
                    </div>
                    <div>
                      <span>U</span>
                    </div>
                    <div>
                      <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                    </div>
                  </div>
                  <div className="header__logo__link-title">#Ukraine4You</div>
                </Link>
              </div>

              <TabsBar tabs={this.state.navbarTabs} getActiveTab={this.getActiveTab}/>
            </nav>
  
            <div className="header__fields">
              {
                this.props.startAuth 
                  ? <UserAvatarSmallSkeleton /> 
                  : this.props.user 
                    ? <User user={this.props.user} onAuth={this.props.onAuth}  /> 
                    : <Guest /> 
              }
  
              <li className="header__search">
                <Link to="/search">
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </li>
            </div>
          </div>
      </header>
    );
  }
}