import React, { Component } from 'react';
import AsideSection from './aside-section/aside-section';
import MainSection from './main-section/main-section';
import CommentSection from './comment-section/comment-section';
import './single-place.scss';

export default class SinglePlace extends Component {
  render() {
    return (
      <div className='single-place'>
        <div className= 'main-comment-sections'>
        < MainSection />
        < CommentSection />
        </div>
        < AsideSection />
      </div>
    );
  }
}

