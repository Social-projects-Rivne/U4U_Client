import React, {Component} from 'react';
import './place-photos.scss';

export default class PlacePhotos extends Component {

    state={
        currentSlide: 0,
        animation: false,
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

        const animationClass = animation ? 'sliderAnimation' : 'sliderAppend';
        return(
            <div className ='place-photo'>
                <div className="prev" onClick={this.prev}>
                    &laquo;
                </div>
                <div className='place-photo-container'>
                    <img src = {photos[currentSlide]} alt ='' className={animationClass}/>
                </div>
                <div className="next" onClick={this.next}>
                    &raquo;
                </div>
            </div>
        );
    };
};
