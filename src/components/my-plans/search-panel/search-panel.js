import React, { Component } from 'react';
import Api from '../../../services/places-service';
import './search-panel.scss';

export default class SearchPanel extends Component {
  state = {
    query: [],
    inputValue: ''
  }
  onCommentChange = (e) => {
    const inputValue = e.target.value;
    clearTimeout(this.timeout)
    this.setState({
      inputValue: e.target.value
    })
    if (inputValue.length >= 1 && inputValue.trim()) {
      this.timeout = setTimeout(() => {
        Api.getSearchParameters(inputValue).then((query) => {
          if (query.length > 0) {
            this.setState({ query })
          }
          else {
            query.push({ name: 'There is no such a place' });
            this.setState({ query })
          }
        }
        );
      }, 400)
    }
    else {
      this.setState({ query: [] })
    }
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onButtonAddClick(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  };

  render() {
    const options = this.state.query.map(place => (
      <li key={place._id}
        onClick={() => {
          this.setState({
            inputValue: place.name,
            query: []
          })
        }}>
        {place.name}
      </li>
    ));

    const searchFormStyle = {
      boxShadow: options.length ? " 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px 0 rgba(0,0,0,0.2)" : ""
    };

    const searchInputStyle = {
      borderRadius: options.length ? "1rem 0 0 0" : "",
    };

    const searchButtonStyle = {
      borderRadius: options.length ? "0 1rem 0 0" : ""
    };

    return (
      <div className='search-bar'>
        <div className='search-panel'>
          <form 
            className='search-panel-form'
            onSubmit={this.onSubmit}
            style={searchFormStyle}>

            <input 
              type="text"
              className=" search-input"
              maxLength='50'
              placeholder="Search name of the place and add it to your wish list"
              onChange={this.onCommentChange}
              required
              pattern="[A-Za-z\s]+"
              value={this.state.inputValue}
              style={searchInputStyle}
            />

            <button 
              type='submit' 
              id='add-item-button'
              style={searchButtonStyle}
            >
              Add
            </button>

          </form>
          <div id='search-autocomplete-items-style'>
            <ul>
              {options}
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

