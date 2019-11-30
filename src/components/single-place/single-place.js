import React, { Component } from 'react';
import AsideSection from './aside-section/aside-section';
import MainSection from './main-section/main-section';
import CommentSection from './comment-section/comment-section';
import CommentViewSection from './comment-view-section/comment-view-section';
import Api from './../../services/places-service';
import Spinner from './../../components/utils/spinner';
import commentContext from './comment-context';
import reviewService from '../../services/review-service';
import { withRouter } from 'react-router-dom';
import './single-place.scss';

class SinglePlace extends Component {
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

  async getPlaceData(placeId) {
    
    const place = await Api.getPlace(placeId);
    const comments = await reviewService.getAllComments(placeId);

    this.setState({ place: place, CommentList:comments});
  }

  async componentDidUpdate() {
    try {
      const {
        match: { params }
      } = this.props;

      
      if (this.state.place && params.id !== this.state.place._id) {
        await this.getPlaceData(params.id);
      }
    } catch (error) {
      console.log('Handle get single plase error:', error);
    }
  }

  async componentDidMount(){
    try {
      const {
        match: { params }
      } = this.props;

      await this.getPlaceData(params.id);
    } catch (error) {
      console.log('Handle get single plase error:', error);
    }
  }

  render() {
    const loading = !this.state.place ? false : true;

    return (
      <div className="single-place">
        {loading ? (
          <div className="single-place-wrapper">
            <div className="single-place-content">
              <MainSection place={this.state.place} />
              <div className="main-comment-sections">
                <commentContext.Provider value={this.commentContext} >
                  <CommentSection placeId={this.state.place._id} />
                  <CommentViewSection  commentList = {this.state.CommentList}/>
                </commentContext.Provider>
              </div>
            </div>
            <AsideSection />
          </div>
        ) : (
          <Spinner />
      )}
      </div>
    );
  }
}

export default withRouter(SinglePlace);
