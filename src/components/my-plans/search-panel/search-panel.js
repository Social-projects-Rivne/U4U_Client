import React, { Component } from 'react';
import Api from '../../../services/places-service';
import './search-panel.scss';
import Suggestions from '../suggestions/suggestions';

export default class SearchPanel extends Component {
  state = {
    comment:'',
    query:[]
  }
  
  onCommentChange = (e) => {
    const comment = e.target.value;
    if (comment.length >= 2){
        Api.getSearchParameters().then((query) => {
          this.setState({query})
        });
   }
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onButtonAddClick(this.state.comment)
    this.setState({
      comment:''
    })
  };
  render() {
    return (
      <div className = 'search-bar'>
      <form className='search-panel'
        onSubmit={this.onSubmit}>
        <input type="text"
          className=" search-input"
          maxLength='50'
          placeholder="Type to add a place"
          onChange={this.onCommentChange}
          required 
          // value = {this.state.comment}
          />
        <button type='submit' id='add-item-button'>Add</button>
      </form>
        <Suggestions query = {this.state.query} />
       </div>

    );
  };
};

