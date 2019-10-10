import React, { Component } from 'react';
import AsideHeading from './aside-heading/aside-heading';
import AsidePlaceInfo from './aside-place-info/aside-place-info';
import AsidePlacePhotos from './aside-place-photos/aside-place-photos';
import './aside-section.scss';

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

