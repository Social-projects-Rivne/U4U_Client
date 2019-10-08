import React from "react";
import { Link } from 'react-router-dom';
import './Guest.scss';

const Guest = () => {
  return (
    <div className="header__guest">
      <Link to="/login">Sign In</Link>

      <Link to="/sign-up">Sign Up</Link>
    </div>
  )
}

export default Guest