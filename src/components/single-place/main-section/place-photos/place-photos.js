import React, {Component} from 'react';
import './place-photos.scss';

export default class PlacePhotos extends Component {

    state={
        currentPhoto: 0
    }

    prev = () => {
        const {currentPhoto} = this.state;
        const {photos} = this.props;

        this.setState({
            currentPhoto: 1 - currentPhoto
        })

        if(currentPhoto < 0){
            this.setState({
                currentPhoto: photos.length - 1
            })
        }
    }
    
    next = () => {
        const {currentPhoto} = this.state;
        const {photos} = this.props;
        
        this.setState({
            currentPhoto: 1 + currentPhoto
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
                <button onClick={this.prev}>Back</button>
                <img src = {photos[currentPhoto]} alt = ''/>
                <button onClick={this.next}>Next</button>
            </div>
        );
    };
};