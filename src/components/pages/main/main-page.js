import React, { Component } from 'react';
import UMap from '../../uMap/uMap';
import MainPopularPlaces from './main-popular-places/main-popular-places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PartyPopper  from './../../../img/1f389.png';
import HandWithFingersSplayed  from './../../../img/1f590.png';
import FaceBlowingAKiss  from './../../../img/1f618.png';
import Footer from './../../footer';
import './main-page.scss';


export default class MainPage extends Component {
  constructor (props) {
    super (props);

    this.state = {
      showWelcome: !localStorage.getItem("welcome_screen") ? true : false
    }
  }

  hideWelcome() {
    localStorage.setItem("welcome_screen", false);
    this.setState({showWelcome: false});
  }

  render() {
      return (
        <div className={"MainPage " + (this.state.showWelcome ? "MainPage-welcome_overflow" : "")}>
          <div className={"MainPage-section-map " + (this.state.showWelcome ? "MainPage-section-map_welcome" : "")}>
            {
              this.state.showWelcome
              ? <div className="MainPage-welcome" onClick={() => {this.hideWelcome()}}>
                  <span className="MainPage-welcome-title">
                    Welcome, new user 
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
                       <image xlinkHref={PartyPopper}/>
                    </svg>
                    ! Glad to see you on our site
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
                       <image xlinkHref={HandWithFingersSplayed}/>
                    </svg>
                    <br/>
                    You can interact with a pretty and powerful map to find new interesting places.<br/>
                    Hope you enjoy!
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">       
                       <image xlinkHref={FaceBlowingAKiss}/>
                    </svg>
                  </span>
                  <FontAwesomeIcon className="MainPage-welcome-title-down" icon={faMapMarkerAlt} />
                  <div className="MainPage-welcome-close" onClick={() => {this.hideWelcome()}}>
                    <FontAwesomeIcon icon={faTimes} size="5x"/>
                  </div>
                </div>
              : ""
            }
            
            <div 
              className={"MainPage-section-map-container " + (
                  this.state.showWelcome ? "MainPage-section-map-container_welcome" : ""
                )}
              onClick={() => {this.hideWelcome()}}>

              <UMap onClick={() => {this.hideWelcome()}}/>
            </div>
          </div>
          <div className="MainPage-section-popular">
            <MainPopularPlaces />
            <Footer />
          </div>
        </div>
      );
  }
}