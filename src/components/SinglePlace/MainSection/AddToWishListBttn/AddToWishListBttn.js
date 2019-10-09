import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './AddToWishListBttn.scss';

export default class AddToWishListBttn extends Component {
   render() {
      return(
        <div className ='add-to-wish-list-bttn'>
            <FontAwesomeIcon icon={faPlus}
             size="2x"
             title='Add place to my Wish List'
             />
         </div>
      )
   }
}