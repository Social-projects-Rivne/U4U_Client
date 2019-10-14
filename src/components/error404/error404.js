import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../img/error404.mp4'
import './error404.scss'

const Error404 = () => {
  return (
    <div className="error404">
      <div className="error404__search">
        <input type="search" placeholder="Search" />
      </div>

      <div className="error404__title">
        <div className="error404__subtitle">
          <span>404</span>
  
          <h1>
            We are sorry, but the page you requested was not found
  
          </h1>
        </div>

        <h2>
          Come with me to the:
            <Link to="/">Home page</Link>
        </h2>
      </div>

      <div className="error404__video">
        <video src={error404} autoPlay muted loop>
          <source src={error404} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}

export default Error404