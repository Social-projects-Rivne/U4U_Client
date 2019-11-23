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
     
        if(!props.photo || !props.title || !props.id) {
          throw Error("This component cant exist without next props:\n title,\n photo,\n id \n")
        }
    
        this.state = {
            photoLoadState: false
        };
      }

    onImageLoaded = () => {
        this.setState({photoLoadState: true})
    }

    render() {
        const spinerModifier = (this.state.photoLoadState) ? '' : ' place-card-spinner-show';
        const cardModifier = (this.state.photoLoadState) ? ' place-card-show' : '';

        return (
            <div className='place-card-container'>
                <div className={`place-card-spiner ${spinerModifier}`}>
                    <Spiner />
                </div>

                <Link to={`singleplace/${this.props.id}`} style={{ textDecoration: 'none' }}>
                    <div className={`place-card ${cardModifier}`}>
                        <img 
                            src={this.props.photo} 
                            alt={this.props.title} 
                            onLoad={() => { this.onImageLoaded()} }
                        />
                        <div className="place-card-info">
                            <div className="place-card-info-location">
                                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                                <span>Rivne, Piv Zavod</span>
                            </div>
                            <div className="place-card-info-rating">
                                <FontAwesomeIcon icon={faStar}/>
                                <span>4</span>
                            </div>
                        </div>
                        <h2>{this.props.title}</h2>
                    </div>
                </Link>
            </div>
        )
    }
}
