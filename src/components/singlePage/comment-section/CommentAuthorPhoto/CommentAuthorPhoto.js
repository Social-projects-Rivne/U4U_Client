import React from 'react';
import './CommentAuthorPhoto.scss'
 


const CommentAuthorPhoto = (props) =>{
    return  (
            <img className = 'CommentAuthorPhoto'
                 src ={props.photoUrl} 
                 alt = {props.name}/>
        )
    }
export default CommentAuthorPhoto