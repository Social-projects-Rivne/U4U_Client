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

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if(!this.node) {
      return;
    }
    
    if(this.node.contains(e.target)) {
      return;
    }

    this.closeDropDown(null, this.props.name);
  }

  render() {
    return (
      <div ref={node => this.node = node} className='filter'>
        <ul className={'filter-dropdown ' + (this.state.isActive ? 'filter-dropdown-active' : null)}>
            <label className='filter-dropdown-label' onClick={() => {this.toggleDropDown(this.state.title)}}>
              {this.state.title}
            </label>
            <ul className='filter-dropdown-list'>
              <li className='filter-dropdown-item' onClick={() => {this.closeDropDown(null, this.props.name)}}>
                {this.props.name}
              </li>
              {
                this.props.data &&
                  this.props.data.map(data => {
                    return (
                      <li 
                        className='filter-dropdown-item'
                        key={data.id} 
                        onClick={() => {this.closeDropDown(data.id, data.title)}}
                      >
                        {data.title}
                      </li>
                    )
                  })
              }
            </ul>
        </ul>
      </div>
    );
  }
}
