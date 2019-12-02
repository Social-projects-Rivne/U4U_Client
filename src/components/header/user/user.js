import React, { Component } from "react";
import { Link } from 'react-router-dom';
import api from '../../../services/tourist-service';
import TokenService from '../../../services/token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './user.scss';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      setLogOut: false
    }
  }

  handleLogOut = () => {
    api.logOut()
      .then(res => {
        TokenService.removeToken();
        TokenService.removeRefreshToken();

        this.setState({ setLogOut: true })
        this.props.onAuth();
      })
      .catch(err => {
        this.setState({ setLogOut: false })
        alert('Cannot log out');
      });
  }

  render() {
  
    return (
      <div className="header__user">
        <div className="header__user-data">
          <Link to="/profile" className="header__user-data-profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to="/" className='header__user-data-log-out' onClick={this.handleLogOut}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>
        </div>
      </div>
    );
  }
}