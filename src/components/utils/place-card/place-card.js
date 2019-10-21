import React, { Component } from 'react';
import Spiner from "../spinner";
import './place-card.scss';

export default class PlaceCard extends Component {
    constructor(props) {
        super(props);
     
        if(!props.photo || !props.title) {
          throw Error("This component cant exist without next props:\n title,\n photo \n")
        }
    
        this.state = {
            photoLoadState: false,
            redirectToPlace: null
        };
      }

    onImageLoaded = () => {
        this.setState({photoLoadState: true})
    }

    clickCard = () => {
        this.setState({redirectToPlace: true})
    }

    render() {
        const spinerModifier = (this.state.photoLoadState) ? '' : ' place-card-spinner-show'
        const cardModifier = (this.state.photoLoadState) ? ' place-card-show' : ''

        return (
            <div className='place-card-container'>
                <div className={`place-card-spiner ${spinerModifier}`}>
                    <Spiner />
                </div>

                <div className ={`place-card ${cardModifier}`} onClick={() => {this.clickCard()}}>
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
