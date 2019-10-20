import React, {Component} from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component{

  onFieldChange = ()=>{
      console.log('hello')
  }
  render(){
  return (
    <input type = "text"
           className=" search-input"
           placeholder="Click to add or search a place"
           onChange = {this.onFieldChange} />
      
  );
  };
};

