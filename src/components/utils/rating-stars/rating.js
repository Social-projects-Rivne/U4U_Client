import React, { Component } from 'react';
import './rating.scss';

export default class Rating extends Component{

    render(){
        const { value, onStar } = this.props;
        return(
            <i className='stars' onClick={() => onStar(value)}>&#9733;</i>
        );
    }
}