import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './place-photos.scss';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export default class PlacePhotos extends Component {

    prev = () => {
       
    }
    
    next = () => {
        
    }

    

    render(){
        const {photos} = this.props;
        return(
            <div className ='place-photo'>
                <FontAwesomeIcon className="prev" icon={faArrowAltCircleLeft} />
                <img src = {photos[2]} alt = ''/>
                <FontAwesomeIcon className="next" icon={faArrowAltCircleRight} />
            </div>
        );
    };
};