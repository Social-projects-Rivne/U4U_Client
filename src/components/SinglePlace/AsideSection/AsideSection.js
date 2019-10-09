import React, { Component } from 'react';
import AsideHeading from './AsideHeading/AsideHeading';
import AsidePlaceInfo from './AsidePlaceInfo/AsidePlaceInfo';
import AsidePlacePhotos from './AsidePlacePhotos/AsidePhotos';
import './AsideSection.scss'

export default class AsideSection extends Component {
    render() {
        return (
            <div className='aside-section'>
                <AsideHeading />
                <AsidePlaceInfo />
                <AsidePlacePhotos />
            </div>
        )
    }
}

