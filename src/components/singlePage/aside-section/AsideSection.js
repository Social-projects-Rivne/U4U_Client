import React from 'react';
import AsideHeading from '../aside-section/AsideHeading/AsideHeading';
import AsidePlaceInfo from '../aside-section/AsidePlaceInfo/AsidePlaceInfo';
import AsidePlacePhotos from '../aside-section/AsidePlacePhotos/AsidePhotos';
import './AsideSection.scss'

const AsideSection = () =>{
    return(
        <div className = 'AsideSection'>
           <AsideHeading />
           <AsidePlaceInfo />
           {/* <AsidePlacePhotos />  */}
        </div>
    )
}

export default AsideSection;