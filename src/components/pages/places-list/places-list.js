import React, { Component } from 'react';
import FIlter from './filter/filter';
import './places-list.scss';

export default class PlacesList extends Component {
  render() {
    return (
      <div className='places-list'>
        <div className='places-list-header'>
            <h1 className='places-list-header-title'>Main Ukraine places</h1>
            <div className='places-list-header-filtres'>
            <FIlter/>
            <FIlter/>
            <FIlter/>
            </div>
        </div>
        <div className='places-list-content'>
        b
        </div>
        <div className='places-list-pagination'>
        c
        </div>
      </div>
    );
  }
}
