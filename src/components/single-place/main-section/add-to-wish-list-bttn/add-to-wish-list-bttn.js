import React, { Component } from 'react';
import './add-to-wish-list-bttn.scss';

export default class AddToWishListBttn extends Component {
  render() {
    return (
      <div className='add-to-wish-list-bttn'>
        <label class="wish-checkbox">
          Wish to Visit <input type="checkbox" />
          <span class="wish-checkmark"></span>
        </label>
      </div>
    )
  }
}
