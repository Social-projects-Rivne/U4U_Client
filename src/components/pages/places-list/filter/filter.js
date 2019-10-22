import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './filter.scss';

export default class Filter extends Component {
  constructor(props) {
    super(props);
 
    if(!props.data || !props.getFilterValue || !props.name) {
      throw Error("This component cant exist without next props:\n data,\n name,\n getFilterValue()\n")
    }

    this.state = {
      isActive: false,
      selectedItem: null
    };
  }

  toggleDropDown = () => {
    if(!this.state.isActive) {
      this.setState({isActive: true});
    } else {
      this.closeDropDown()
    }
  }

  closeDropDown = (title) => {
    if(title) {
      this.props.getFilterValue({from: this.props.name, value: title});
      this.setState({selectedItem: title});
    }

    this.setState({isActive: false})
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

    this.closeDropDown();
  }

  removeSelectedItem = () => {
    this.props.getFilterValue({from: this.props.name, value: null});
    this.setState({selectedItem: null});
  }

  render() {
    const labelWidth = {
      width: this.selectedItem ? "80%" : "100%"
    };

    return (
      <div ref={node => this.node = node} className='filter'>
        <ul className={'filter-dropdown ' + (this.state.isActive ? 'filter-dropdown-active' : null)}>
          <div className='filter-dropdown-info'>
            <div 
              className='filter-dropdown-info-click' 
              onClick={() => {this.toggleDropDown()}} 
              style={labelWidth}
            >
              <label>
                {this.state.selectedItem ? this.state.selectedItem : this.props.name}
              </label>
            </div>
            <div 
              className={'filter-dropdown-info-icon ' + (this.state.selectedItem ? 'filter-dropdown-info-icon-show' : null)}
              onClick={() => {this.removeSelectedItem()}}
            >
              <FontAwesomeIcon icon={faTimes} size='2x'/>
            </div>
          </div>
            
          <ul className='filter-dropdown-list'>
          {
            this.props.data &&
              this.props.data.map(data => {
                return (
                  <li 
                    className='filter-dropdown-item'
                    key={data.id} 
                    onClick={() => {this.closeDropDown(data.title)}}
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
