import React, { Component } from 'react';
import './filter.scss';

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
          <select className='filter-select'>
            <option value="">Regions</option>
          </select>
      </div>
    );
  }
}
