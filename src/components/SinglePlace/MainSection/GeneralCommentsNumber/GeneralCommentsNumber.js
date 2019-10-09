import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import './GeneralCommentsNumber.scss';

const GeneralCommentsNumber = () => {
   return (
      <div className='comment-number-icon'>
         <FontAwesomeIcon icon={faComment}
         size="3x"
         title='Show all comments'
         />
      </div>
   )
}
export default GeneralCommentsNumber; 
   
  

 