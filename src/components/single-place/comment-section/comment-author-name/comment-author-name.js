import React from 'react';
import './comment-author-name.scss';

const CommentAuthorName = (props) => {

    return (
        <p className ='comment-author-name'>{props.name}</p>

    )
}
export default CommentAuthorName;
