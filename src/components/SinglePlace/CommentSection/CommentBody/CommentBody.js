import React, { Component } from 'react';
import './CommentBody.scss'

export default class CommentBody extends Component {
    render() {
        return (
            <div className='comment-body'>
                <p className ='comment-sharing'>Share your advantures...</p>
                <form action="" method="post">
                    <textarea name='comment'></textarea><br></br>
                    <input type='submit' value='comment'></input>
                </form>
            </div>
        )
    }
}
