import React, { Component } from 'react';
import Api from '../../../services/places-service';
import './search-panel.scss';

export default class SearchPanel extends Component {
  state = {
    query: [],
    inputValue: '',
    placeId: null
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
    const { inputValue, placeId } = this.state

    event.preventDefault();
    this.props.onButtonAddClick(inputValue, placeId)
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
            placeId: place._id,
            query: []
          })
        }}>
        {place.name}
      </li>
    ));

    return (
      <div className='search-bar'>
        <div className='search-panel'>
          <form 
            className={'search-panel-form ' + (options.length ? "search-panel-form_shadow" : "")}
            onSubmit={this.onSubmit}>

            <input 
              type="text"
              className={"search-input " + (options.length ? "search-input_border" : "")}
              maxLength='50'
              placeholder="Search name of the place and add it to your wish list"
              onChange={this.onCommentChange}
              required
              value={this.state.inputValue}
            />

            <button
              className={"search-input-add-item-button " + (options.length ? "search-input-add-item-button_border" : "")} 
              type='submit'
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

