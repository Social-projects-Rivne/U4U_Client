import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './place-photos.scss';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export default class PlacePhotos extends Component {

    state={
        currentPhoto: 1
    }

    prev = () => {
        const {currentPhoto} = this.state;
        const {photos} = this.props;


        this.setState(({currentPhoto}) => {
            console.log('set state on', currentPhoto)
            return{
                currentPhoto: --currentPhoto
            }
        })

        if(currentPhoto <= 0){
            this.setState({
                currentPhoto: photos.length - 1
            })
        }
    }
    
    next = () => {
        const {currentPhoto} = this.state;
        const {photos} = this.props;

        this.setState(({currentPhoto}) => {
            return{
                currentPhoto: ++currentPhoto
            }
        })

        if(currentPhoto >= photos.length - 1){
            this.setState({
                currentPhoto: 0
            })
        }
    }

    render(){
        const {photos} = this.props;
        const {currentPhoto} = this.state;

        return(
            <div className ='place-photo'>
                <FontAwesomeIcon className="prev" icon={faArrowAltCircleLeft} onClick={this.prev} />
                <img src = {photos[currentPhoto]} alt = ''/>
                <FontAwesomeIcon className="next" icon={faArrowAltCircleRight} onClick={this.next} />
            </div>
        );
    };
};