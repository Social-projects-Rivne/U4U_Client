import React, { Component } from 'react';
import './add-to-wish-list-bttn.scss';

export default class AddToWishListBttn extends Component {
  render() {
    const disabled = !this.props.isAuth ? ' disabled' : ''
    return (
      <div className='add-to-wish-list-bttn'>
        <label class={`wish-checkbox ${disabled}`}>
          Wish to visit <input type="checkbox" />
          <span class="wish-checkmark"></span>
        </label>
      </div>
    )
  }
}
