import React, { Component } from 'react';
import UMap from '../../uMap/uMap';
import MainPopularPlaces from './main-popular-places/main-popular-places';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
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
                    Welcome, new user <span role="img" aria-label="firework">&#127881;</span>! Glad to see you on our site <span role="img" aria-label="hand">&#128400;</span><br/>
                    You can interact with a pretty and powerful map to find new interesting places.<br/>
                    Hope you enjoy! <span role="img" aria-label="smile">&#128536;</span>
                  </span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
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