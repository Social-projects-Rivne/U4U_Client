import React, { Component } from 'react';
import AsideSection from '../singlePage/aside-section/AsideSection';
import MainSection from '../singlePage/main-section/MainSection';
import './SinglePlace.scss'

class SinglePlace extends Component {
  render() {
    return (
   
    <div className = 'SinglePlace'>
      < MainSection />
      < AsideSection />
    </div>

 
    );
  }
}

export default SinglePlace;