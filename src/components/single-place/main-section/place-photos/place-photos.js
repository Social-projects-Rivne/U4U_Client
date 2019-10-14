import React, {Component} from 'react';
import './place-photos.scss';

export default class PlacePhotos extends Component {

    state={
        currentSlide: 0
    }

    prev = () => {
        const {photos} = this.props;
        const {currentSlide} = this.state;
        
        if(currentSlide <= 0){
            this.setState({
                currentSlide: photos.length - 1
            })
        }
        else{
            this.setState(({currentSlide}) => {
                return{
                    currentSlide: --currentSlide
                }
            })
        }
    }
    
    next = () => {
        const {photos} = this.props;
        const {currentSlide} = this.state;

        if(currentSlide >= photos.length - 1){
            this.setState({
                currentSlide: 0
            })
        }
        else{
            this.setState(({currentSlide}) => {
                return{
                    currentSlide: ++currentSlide
                }
            })
        }
    }

    
    render(){
        const {photos} = this.props;
        const {currentSlide} = this.state;
        return(
            <div className ='place-photo'>
                <div className="prev" onClick={this.prev}>
                    &laquo;
                </div>
                <img src = {photos[currentSlide]} alt = ''/>
                <div className="next" onClick={this.next}>
                    &raquo;
                </div>
            </div>
        );
    };
};