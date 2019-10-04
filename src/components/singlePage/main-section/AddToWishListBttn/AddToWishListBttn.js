import React from 'react';
import './AddToWishListBttn.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


  const AddToWishListBttn = () => {
  const element = <FontAwesomeIcon icon={faPlus} 
  size="1x" 
  title = 'Add place to my Wish List'
  />
        return  (
           
         <div className = 'AddToWishList'>
            {element}
         </div>
           
                 
        )
    }
 export default AddToWishListBttn;