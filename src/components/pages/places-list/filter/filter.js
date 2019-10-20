import React, { Component } from 'react';
import './filter.scss';

export default class Filter extends Component {
  state = {
    isActive: false,
    value: null,
    title: this.props.name
  };

  toggleDropDown = (title) => {
    if(!this.state.isActive) {
      this.setState({isActive: true});
    } else {
      this.closeDropDown(null, title)
    }
  }

  closeDropDown = (value, title) => {
    this.setState({isActive: false, value: value, title: title});
  }

  render() {
    return (
      <div className='filter'>
        <div className="filter-navigation">
            <div className="filter-navigation-sub" onClick={() => {this.toggleDropDown("test")}}>Click me</div>
        </div>
        <div className={"filter-navigation-dropdown " + (this.state.isActive ? 'hide' : null)}>
            <ul>
                <li>
                  1
                </li>
                <li>
                  2
                </li>
                <li>
                  3
                </li>
                <li>
                  4
                </li>
            </ul>
        </div>
          {/* <span className={'filter-dropdown ' + (this.state.isActive ? 'expanded' : null)}>
            <input className="filter-dropdown-input" type="radio" name="sortType" value="Relevance" checked="checked" id="sort-relevance"/>
            <label htmlFor="sort-relevance" onClick={() => {this.toggleDropDown(this.state.title)}}>
              {this.state.title}
            </label>
            <div className='filter-dropdown-items-container'>
              <label onClick={() => {this.closeDropDown(null, this.props.name)}}>
                {this.props.name}
              </label>
              {
                this.props.data &&
                  this.props.data.map(data => {
                    return (
                      <label key={data.id} htmlFor="sort-best" onClick={() => {this.closeDropDown(data.id, data.title)}}>{data.title}</label>
                      // <div>
                      //   <input type="radio" name="sortType" value="Popularity" id="sort-best"/>
                      //   <label htmlFor="sort-best">{data.id}</label>
                      // </div>
                    )
                  })
              }
            </div>
          </span> */}
      </div>
    );
  }
}
