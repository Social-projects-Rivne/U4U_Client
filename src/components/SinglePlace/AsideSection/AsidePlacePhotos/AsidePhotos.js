import React, { Component } from 'react';
import './AsidePhotos.scss';
import photo1 from './photo1.jpg'

export default class AsidePhotos extends Component {
    render() {
        return (
            <div className ='nearby-places-photos-collection'>

                <div className ='nearby-place-photo'>
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

                <div className = 'nearby-place-photo'>
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

                <div className ='nearby-place-photo'>
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

                <div className ='nearby-place-photo' >
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

                <div className = 'nearby-place-photo'>
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

                <div className ='nearby-place-photo'>
                    <img src={photo1}
                        alt='' />
                    <h4>SOME PLACE</h4>
                </div>

            </div>
        )
    }
}








