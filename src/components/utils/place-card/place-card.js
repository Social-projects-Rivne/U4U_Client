import React, { Component } from 'react';
import Spiner from "../spinner";
import './place-card.scss';

export default class PlaceCard extends Component {
    state = {
        photoLoadState: null
    }

    onImageLoaded = () => {
        this.setState({photoLoadState: true})
    }

    render() {
        const spinerModifier = (this.state.photoLoadState) ? '' : ' place-card-spinner-show'
        const cardModifier = (this.state.photoLoadState) ? ' place-card-show' : ''

        return (
            <div className='place-card-container'>
                <div className={`place-card-spiner ${spinerModifier}`}>
                    <Spiner />
                </div>

                <div className ={`place-card ${cardModifier}`}>
                    <img 
                        src={this.props.photo} 
                        alt={this.props.title} 
                        onLoad={() => { this.onImageLoaded()} }
                    />
                    <h2>{this.props.title}</h2>
                </div>
            </div>
        )
    }
}
