import React, { Component } from 'react';
import './place-card.scss';

export default class PlaceCard extends Component {
    render() {
        return (
            <div className ='place-card'>
                <img src={this.props.photo} alt={this.props.title} />
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
