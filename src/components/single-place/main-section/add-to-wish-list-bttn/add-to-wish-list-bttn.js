import React, { Component } from 'react';
import './add-to-wish-list-bttn.scss';
import PlansListService from '../../../../services/plans-list-service';

export default class AddToWishListBttn extends Component {
  service = new PlansListService();

  state = {
    myPlansList: [],
    wishId: null,
    wishState: false,
    isDisabled: false,
  }

  componentDidMount() {    
    if(this.props.isAuth) {
      this.service.getPlansList()
      .then((plansList) => {
        const findChosenPlace = plansList.find(place => {
          return place.placeId === this.props.currentPlaceId
        })
        if (findChosenPlace) {
          this.setState({
            myPlansList: plansList,
            wishState: true,
            wishId: findChosenPlace._id,
          })
        }
      }).catch((error) => {
        console.log(error)
      })
    }
  }

  toWish = (wishId, placeId, placeName) => {
    this.setState({ isDisabled: true })
    if (!this.state.wishState) {
      const newPlace = {
        placeId,
        placeName,
        done: false,
        inProgress: false
      }
      this.service.postWish(newPlace)
        .then((res) => {
          this.setState({
            wishId: res.id,
            wishState: true,
            isDisabled: false
          })
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      this.service.deleteWish(wishId)
        .then((res) => {
          this.setState({
            wishState: false,
            isDisabled: false
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render() {
    const { wishState } = this.state
    const disabled = this.state.isDisabled || !this.props.isAuth ? 'disabled' : ''

    return (
      <div className='add-to-wish-list-bttn'>
        <label className={`wish-checkbox ${disabled}`}>
          Wish to visit
          <input
            type="checkbox"
            checked={wishState ? 'checked' : ''}
            onChange={() => this.toWish(
              this.state.wishId,
              this.props.currentPlaceId,
              this.props.currentPlaceName)} />
          <span className="wish-checkmark"></span>
        </label>
      </div>
    )
  }
}
