import React, { Component } from 'react';
import AsideSection from './aside-section/aside-section';
import MainSection from './main-section/main-section';
import CommentSection from './comment-section/comment-section';
import CommentViewSection from './comment-view-section/comment-view-section';
import Api from './../../services/places-service';
import Spinner from './../../components/utils/spinner';
import commentContext from './comment-context';
import './single-place.scss';
import reviewService from '../../services/review-service';

export default class SinglePlace extends Component {
  state = {
    place: null,
    CommentList:[]
  };
  addComment=(newComment) =>{
    this.setState({CommentList : [...this.state.CommentList, newComment]})
    
  }
  commentContext = {  
    comments: this.state.CommentList,
    addComment:this.addComment
  }

  async componentDidMount(){
    try {
      const {
        match: { params }
      } = this.props;
      const placeId = params.id;
      const placett = await Api.getPlace(placeId);
      const comments = await reviewService.getAllComments(placeId);
      this.setState({ place: placett, CommentList:comments});
    } catch (error) {
      console.log('Handle get single plase error:', error);
    }
  }

  render() {
    const loading = !this.state.place ? false : true;

    const {
      match: { params }
    } = this.props;
    const placeId = params.id;
    return (
      <div className="single-place">
        <div className="single-place-wrapper">
          <div className="single-place-content">
            {loading ? (
                <MainSection place={this.state.place} />
              ) : (
                <Spinner />
            )}
            <div className="main-comment-sections">
              <commentContext.Provider value={this.commentContext} >
                <CommentSection placeId={placeId} />
                <CommentViewSection  commentList = {this.state.CommentList}/>
              </commentContext.Provider>
            </div>
          </div>
          <AsideSection />
        </div>
      </div>
    );
  }
}
