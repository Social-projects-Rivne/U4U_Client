import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './place-photos.scss';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export default class PlacePhotos extends Component {

    state={
       currentSlide: 0
    }

    prev = () => {
    
    }
    
    next = () => {
        
    }

    render(){
        const {photos} = this.props;
        return(
            <div className ='place-photo'>
                <FontAwesomeIcon className="prev" icon={faArrowAltCircleLeft} onClick={this.prev} />
                <img src = {photos[0]} alt = ''/>
                <FontAwesomeIcon className="next" icon={faArrowAltCircleRight} onClick={this.next} />
            </div>
        );
    };
};