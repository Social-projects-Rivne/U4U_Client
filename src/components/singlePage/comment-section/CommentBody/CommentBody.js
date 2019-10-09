import React from 'react';
import './CommentBody.scss'
 
const CommentBody = (props) => {
    return  (
           <div className ='CommentBody'>
               <p className = 'AdvSharing'>Share your advantures...</p>
               <form action = "" method ="post">
                   <textarea name ='comment'></textarea><br></br>
                   <input type ='submit' value ='comment'></input>
               </form>
            </div>
        )
    }
export default CommentBody;