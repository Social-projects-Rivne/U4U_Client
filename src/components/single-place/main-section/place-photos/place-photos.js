import React, {Component} from 'react';
import PlaceName from './../place-name/place-name';
import Weather from './../weather/weather';
import SubHeading from './../sub-heading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './place-photos.scss';

export default class PlacePhotos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            animation: false,
            place: props.place
        };
    }

    prev = () => {
        const {photos} = this.props;
        const {currentSlide} = this.state;

        this.setState(({animation}) => {
            return{
                animation: !animation
            }
        });
        
        if(currentSlide <= 0){
            setTimeout(() => {
                this.setState(({animation, currentSlide}) => {
                    return{
                        animation: !animation,
                        currentSlide: photos.length - 1
                    }
                })
            }, 200);
        }
        else{
           setTimeout(() => {
            this.setState(({currentSlide, animation}) => {
                return{
                    animation: !animation,
                    currentSlide: --currentSlide
                }
            })
           }, 200);
        }
    }
    
    next = () => {
        const {photos} = this.props;
        const {currentSlide} = this.state;

        this.setState(({animation}) => {
            return{
                animation: !animation
            }
        });

        if(currentSlide >= photos.length - 1){
            setTimeout(() => {
                this.setState(({currentSlide, animation}) => {
                    return{
                        animation: !animation,
                        currentSlide: 0
                    }
                })
            }, 200);
        }
        else{
            setTimeout(() => {
                this.setState(({currentSlide, animation}) => {
                    return{
                        animation: !animation,
                        currentSlide: ++currentSlide
                    }
                })
            }, 200);
        }
    }

    
    render(){
        const {photos} = this.props;
        const {currentSlide, animation} = this.state;
        const {name, coordinates} = this.state.place;

        const animationClass = animation ? 'sliderAnimation' : 'sliderAppend';
        return(
            <div className ='place-photo'>
                <div className='place-photo-container'>
                    <div className="place-photo-container-place-info">
                        <div className="place-photo-container-place-info-header">
                            <PlaceName placeName={name} />
                            <div>
                                {coordinates
                                    ?
                                        <Weather 
                                            latitude={coordinates.latitude} 
                                            longitude={coordinates.longitude} /> //TODO: change this workaround when all places will have coodinates
                                    : null
                                }
                            </div>
                        </div>
                        <div className="place-photo-container-place-info-subhead">
                            <SubHeading />
                        </div>
                    </div>

                    <div className="prev" onClick={this.prev}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </div>

                    <img src = {photos[currentSlide]} alt ='' className={animationClass}/>

                    <div className="next" onClick={this.next}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>

                </div>
            </div>
        );
    };
};
