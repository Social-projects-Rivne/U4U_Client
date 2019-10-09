import React from 'react';
import './CommentAuthorName.scss'

const CommentAuthorName = (props) => {

    return (
        <p className ='comment-author-name'>{props.name}</p>

    )
}
export default CommentAuthorName;
