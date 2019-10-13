import React, {Component} from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component{
  render(){
  return (
    <input type = "text"
           className=" search-input"
           placeholder="I want to visit" />
      
  );
  };
};

