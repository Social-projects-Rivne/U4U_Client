import React, { Component } from 'react';
import './add-to-wish-list-bttn.scss';
import PlansListService from '../../../../services/plans-list-service';

export default class AddToWishListBttn extends Component {
  service = new PlansListService();

  state = {
    // myPlansIdList: [],
    wishState: '',
  }

  componentDidMount() {
    this.service.getPlansList()
      .then((plansList) => {
        const currentUserListArr = []
        const idArray = []

        plansList.filter(e => {
          if(+e.userId === +this.props.loggedInUserId) {
            return currentUserListArr.push(e)
          }
        })
        
        currentUserListArr.map(e => {          
          return idArray.push(e.placeId)
        })

        this.setState({
          wishState: idArray.includes(this.props.currentPlaceId)
        })
      }).catch((error) => {
        console.log(error)
      })
  }

  toWish = () => {
    this.setState({
      wishState: !this.state.wishState
    })
  }

  render() {
    const { wishState } = this.state
    const disabled = !this.props.isAuth ? ' disabled' : ''

    return (
      <div className='add-to-wish-list-bttn'>
        <label class={`wish-checkbox ${disabled}`}>
          Wish to visit <input type="checkbox" checked={wishState?'checked':''} onClick={this.toWish} />
          <span class="wish-checkmark"></span>
        </label>
      </div>
    )
  }
}
