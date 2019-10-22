import React, { Component } from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component {
  onCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onButtonAddClick(this.state.comment)
  };
  render() {
    return (
      <form className='search-panel'
        onSubmit={this.onSubmit}>
        <input type="text"
          className=" search-input"
          maxLength='50'
          placeholder="Type to add a place"
          onChange={this.onCommentChange}
          required />
        <button id='add-item-button'>Add</button>
      </form>

    );
  };
};

