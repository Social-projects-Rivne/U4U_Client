import React, { Component } from 'react';
import './comment-body.scss';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import api from '../../../../services/review-service';
import {Redirect} from "react-router-dom";

export default class CommentBody extends Component {

  onSubmith = (e) => {
    e.preventDefault();
    api.comment({userJwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTU3MTQwMzg4NCwiZXhwIjoxNTcxNDE1ODg0fQ.rkqW8sTDvZQFIenem7EjIo_FUaepGLcmol1FNvXdrgw',comment: 'Cool place', placeId:'Example', rating: '2'})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {

    return (
      <div className='comment-body'>
        <p className='comment-sharing'>Share your advantures about this place...</p>
        <form action="" method="post" onClick={this.onSubmith}>
          <textarea name='comment' placeholder='Tell something about this place, please :)'></textarea>
          <input type='submit' value='Comment' id='comment-button' ></input>
        </form>
      </div>
    )
  }
}
