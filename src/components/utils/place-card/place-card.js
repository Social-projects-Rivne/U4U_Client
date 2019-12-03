import React, { Component } from 'react';
import Spiner from '../spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link  } from 'react-router-dom';
import './place-card.scss';

export default class PlaceCard extends Component {
    constructor(props) {
        super(props);
     
        if(!props.place) {
          throw Error("This component cant exist without next props:\n place\n")
        }
    
        this.state = {
            place: props.place,
            photoLoadState: false
        };
      }

    onImageLoaded = () => {
        this.setState({photoLoadState: true})
    }

    render() {
        const spinerModifier = (this.state.photoLoadState) ? '' : ' place-card-spinner-show';
        const cardModifier = (this.state.photoLoadState) ? ' place-card-show' : '';
        const { _id, photos, name, location, ratingAvg } = this.state.place;

        return (
            <div className='place-card-container'>
                <div className={`place-card-spiner ${spinerModifier}`}>
                    <Spiner />
                </div>

                <Link to={`/singleplace/${_id}`} style={{ textDecoration: 'none' }}>
                    <div className ={`place-card ${cardModifier}`}>
                        <img 
                            src={photos[0]} 
                            alt={name.trim()} 
                            onLoad={() => { this.onImageLoaded()} }
                        />
                        <div className="place-card-info">
                            <div className="place-card-info-location">
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                <div className="place-card-info-location-title">
                                    <div>
                                        {location.region.trim()}
                                    </div>
                                    <div>
                                        {location.district.trim()}
                                    </div>
                                </div>
                            </div>
                            <div className="place-card-info-rating">
                                <FontAwesomeIcon icon={faStar}/>
                                <span>{ratingAvg}</span>
                            </div>
                        </div>
                        <h2>{name.trim()}</h2>
                    </div>
                </Link>
            </div>
        )
    }
}
