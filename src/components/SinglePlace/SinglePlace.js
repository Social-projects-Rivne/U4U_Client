import React, { Component } from 'react';
import AsideSection from './AsideSection/AsideSection';
import MainSection from './MainSection/MainSection';
import CommentSection from './CommentSection/CommentSection';
import './SinglePlace.scss';

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

