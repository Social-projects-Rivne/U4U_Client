import React, { Component } from 'react';
import './comment-body.scss';

export default class CommentBody extends Component {
    render() {

        return (
            <div className='comment-body'>
                <p className='comment-sharing'>Share your advantures...</p>
                <form action="" method="post">
                    <textarea name='comment'></textarea><br></br>
                    <input type='submit' value='comment' id='comment-button' ></input>
                </form>
            </div>
        )
    }
}
