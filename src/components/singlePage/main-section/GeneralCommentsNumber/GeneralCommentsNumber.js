import React from 'react';
import './GeneralCommentsNumber.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


const GeneralCommentsNumber = () => {
   const icon = <FontAwesomeIcon icon={faComment}
      size="lg"
      title = 'Show all comments'
   />
   return (

      <div className='FontIcon'>
         {icon}
      </div>

   )
}
export default GeneralCommentsNumber;