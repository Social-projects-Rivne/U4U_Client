import React from 'react';
import './CommentAuthorPhoto.scss'
 
const CommentAuthorPhoto = (props) => {
    return (
        <img className ='comment-author-photo'
            src={props.photoUrl}
            alt={props.name} />
    )
}
export default CommentAuthorPhoto