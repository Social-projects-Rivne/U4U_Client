import React, {Component } from 'react';
import AddItemButton from '../add-item-button/add-item-button';
import SearchPanel from '../search-panel/search-panel';
import './adding-place-section.scss';
import { text } from '@fortawesome/fontawesome-svg-core';

export default class AddingPlaceSection extends Component{
    render(){
        return(
            <div className = 'search-panel'>
            <SearchPanel/>
            <AddItemButton />
            </div>
            )
    };
};