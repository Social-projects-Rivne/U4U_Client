import React, { Component } from 'react';
import './user-avatar-small-skeleton.scss';

export default class UserAvatarSmallSkeleton extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
    }

    render() {
        return (
            <div className='user-avatar-small-skeleton'></div>
        )
    }
};