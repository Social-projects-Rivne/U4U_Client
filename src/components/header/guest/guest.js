import React from "react";
import { Link } from 'react-router-dom';
import './guest.scss';

const Guest = () => {
  return (
    <div className="header__guest">
      <Link to="/login">Sign In</Link>

      <Link to="/register">Sign Up</Link>
    </div>
  )
}

export default Guest