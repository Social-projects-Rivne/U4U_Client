import React, { Component } from 'react';
import './CommentSection.scss';
import CommentBody from '../comment-section/CommentBody/CommentBody';
import CommentDate from '../comment-section/CommentDate/CommentDate';
import CommentAuthorMark from '../comment-section/CommentAuthorMark/CommentAuthorMark';
import CommentAuthorName from '../comment-section/CommentAuthorName/CommentAuthorName';
import CommentAuthorPhoto from '../comment-section/CommentAuthorPhoto/CommentAuthorPhoto';

export default  class CommentSection extends Component{
    render(){
      return(  
      <div>
       <CommentBody />
       {/* <CommentDate /> 
        <CommentAuthorMark />
       <CommentAuthorName />
       <CommentAuthorPhoto /> */}
      </div>
  )
}

}

