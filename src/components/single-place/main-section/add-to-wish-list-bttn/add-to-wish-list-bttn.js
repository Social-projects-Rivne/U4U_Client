import React, { Component } from 'react';
import './add-to-wish-list-bttn.scss';
import PlansListService from '../../../../services/plans-list-service';

export default class AddToWishListBttn extends Component {
  service = new PlansListService();

  state = {
    myPlansList: [],
    wishId: null,
    wishState: false,
  }

  componentDidMount() {
    this.service.getPlansList()
      .then((plansList) => {
        const find = plansList.find(place => {
          return place.placeId === this.props.currentPlaceId
        })
        if (find) {
          this.setState({
            myPlansList: plansList,
            wishState: true,
            wishId: find._id
          })
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  toWish = (wishId, placeId, placeName) => {
    if (!this.state.wishState) {
      const newPlace = {
        placeId,
        placeName,
        done: false,
        inProgress: false
      }
      this.service.postWish(newPlace).then((res) => {
        this.setState({
          wishState: true
        })
      })
        .catch((error) => {
          console.log(error)
        })
    } else {
      this.service.deleteWish(wishId).then((res) => {
        this.setState({
          wishState: false
        })
      })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render() {
    const { wishState } = this.state
    const disabled = !this.props.isAuth ? ' disabled' : ''

    return (
      <div className='add-to-wish-list-bttn'>
        <label class={`wish-checkbox ${disabled}`}>
          Wish to visit
          <input
            type="checkbox"
            checked={wishState ? 'checked' : ''}
            onClick={() => this.toWish(
              this.state.wishId,
              this.props.currentPlaceId,
              this.props.currentPlaceName)} />
          <span class="wish-checkmark"></span>
        </label>
      </div>
    )
  }
}
