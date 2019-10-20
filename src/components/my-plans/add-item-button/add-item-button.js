import React, {Component} from 'react';
import './add-item-button.scss';

export default class AddItemButton extends Component{
 
  render(){
    
    return (
     <button id = 'add-item-button'
     onClick = {() => this.props.onButtonAddClick('helloooo')}
     >Add</button>  
  );
  };
};