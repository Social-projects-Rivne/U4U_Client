import React from 'react';
import './CommentDate.scss'

function dateInfo(date) {
  return date.toLocaleDateString();
}

const CommentDate = (props) => {
  return (
    <div>{dateInfo(props.todaysdate)}</div>

  )
}
export default CommentDate;