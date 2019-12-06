import React from 'react';
import './sub-heading.scss';

const SubHeading = ({ placeDescription }) => {
    const shortDescription = placeDescription.substring(0, placeDescription.indexOf('.'));
    return (
        <h4 className='sub-heading'>{shortDescription}</h4>
    )
}
export default SubHeading;