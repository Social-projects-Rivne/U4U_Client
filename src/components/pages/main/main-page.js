import React, { Component } from 'react';
import UMap from '../../uMap/uMap';
import MainPopularPlaces from './main-popular-places/main-popular-places';
import './main-page.scss';


export default class MainPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      places: null
    }
  }

  render() {
      return (
          <div className="MainPage">
            <div className="MainPage__section" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
              <UMap />
            </div>
            <div>
              <MainPopularPlaces />
            </div>
          </div>
      );
  }
}