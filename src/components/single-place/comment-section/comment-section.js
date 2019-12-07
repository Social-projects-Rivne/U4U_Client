import React, { Component } from 'react';
import CommentBody from './comment-body/comment-body';
import BlockUserMessage from '../../utils/block-user-message';
import './comment-section.scss';
import {AuthConsumer} from '../../contexts/auth-context';

export default class CommentSection extends Component {
  render() {
    const { placeId } = this.props;
    
    return (
      <AuthConsumer>
      {(context)=>(<div className = 'comment-section global-white-layout'>
        {context.userStatus?<BlockUserMessage/>:<CommentBody placeId={ placeId } />}
      </div>)}
      </AuthConsumer>
    )
  }
}

