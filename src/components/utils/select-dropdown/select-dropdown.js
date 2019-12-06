import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './select-dropdown.scss';

export default class SelectDropdown extends Component {
  constructor(props) {
    super(props);

    if (!props.data || !props.getSelectValue || !props.name) {
      throw Error("This component cant exist without next props:\n data,\n name,\n getSelectValue()\n")
    }

    this.state = {
      isActive: false,
      selectedItem: null
    };
  }

  toggleDropDown = () => {
    if (!this.state.isActive) {
      this.setState({ isActive: true });
    } else {
      this.closeDropDown()
    }
  }

  closeDropDown = (data) => {
    if (data) {
      const { value, id, regionDbId } = data;
      this.props.getSelectValue({ from: this.props.name, value: value, id: id, regionDbId: regionDbId });
      this.setState({ selectedItem: value });
    }

    this.setState({ isActive: false })
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (!this.node) {
      return;
    }

    if (this.node.contains(e.target)) {
      return;
    }

    this.closeDropDown();
  }

  removeSelectedItem = () => {
    this.props.getSelectValue({ from: this.props.name, value: null });
    this.setState({ selectedItem: null });
  }

  render() {
    const labelWidth = {
      width: this.selectedItem ? "80%" : "100%"
    };

    return (
      <ul ref={node => this.node = node} className={'select-dropdown ' + (this.state.isActive ? 'select-dropdown-active' : null)}>
        <div className='select-dropdown-info'>
          <div
            className='select-dropdown-info-click'
            onClick={() => { this.toggleDropDown() }}
            style={labelWidth}
          >
            <label>
              {this.state.selectedItem ? this.state.selectedItem : this.props.name}
            </label>
            <div className={
              'select-dropdown-info-click-arrow ' +
              (
                this.state.isActive && !this.state.selectedItem
                  ? 'select-dropdown-info-click-arrow-toggle'
                  : this.state.selectedItem
                    ? 'select-dropdown-info-click-arrow-hide'
                    : null
              )
            }>
              <FontAwesomeIcon icon={faCaretDown} size='2x' />
            </div>
          </div>
          <div
            className={'select-dropdown-info-icon ' + (this.state.selectedItem ? 'select-dropdown-info-icon-show' : null)}
            onClick={() => { this.removeSelectedItem() }}
          >
            <FontAwesomeIcon icon={faTimes} size='2x' />
          </div>
        </div>

        <ul className='select-dropdown-list'>
          <li
            className='select-dropdown-item'
            key="-1"
          ></li>
          {
            this.props.data &&
            this.props.data.map(data => {
              return (
                <li
                  className='select-dropdown-item'
                  key={data.id}
                  onClick={() => { this.closeDropDown({ value: data.title.trim(), id: data.id, regionDbId: data.regionDbId }) }}
                >
                  {data.title}
                </li>
              )
            })
          }
        </ul>
      </ul>
    );
  }
}
