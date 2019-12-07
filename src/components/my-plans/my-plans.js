import React, { Component } from 'react';
import MyPlansHeader from './my-plans-header/my-plans-header';
import MyPlansList from './my-plans-list/my-plans-list';
import SearchPanel from './search-panel/search-panel';
import PlansListService from '../../services/plans-list-service';
import TokenService from '../../services/token-service';
import { Redirect } from 'react-router-dom';
import './my-plans.scss';

export default class MyPlans extends Component {
  constructor() {
    super();
    this.service = new PlansListService();
    this.state = {
      myPlansList: []
    }
  }
  componentDidMount() {
    if (this.props.user) {
      this.service.getPlansList()
        .then((plansList) => {
          this.setState({ myPlansList: plansList })
        }).catch((error) => {
          console.log(error)
        })
    }
  }

  deleteItem = (id) => {
    this.service.deleteWish(id).then((res) => {
      this.setState(({ myPlansList }) => {
        const elementIndex = myPlansList.filter(function (el) {
          return el._id !== id
        })
        return {
          myPlansList: elementIndex
        }
      })
    })
  }

  addItem = (placeName, placeId) => {
    let checkPlace = this.state.myPlansList.find((place) => {
      return place.placeId == placeId
    })
    if (placeName &&
      !checkPlace &&
      placeId &&
      (placeName.trim() !== '') &&
      placeName !== 'There is no such a place') {

      const newPlace = {
        placeId,
        placeName,
        done: false,
        inProgress: false
      }
      this.service.postWish(newPlace).then((res) => {
        if (res.id) {
          newPlace._id = res.id;
          this.setState(({ myPlansList }) => {
            const newPlansArray = [...myPlansList, newPlace]
            return {
              myPlansList: newPlansArray
            }
          })
        }
      })
    }
    else return;
  }
  render() {
    try {
      TokenService.getToken();

      return (
        <div className="my-plans" >
          <div className="my-plans-content">
            <div className='my-plans-content-adding-header-section'>
              <MyPlansHeader />
              <SearchPanel onButtonAddClick={this.addItem} />
            </div>
            <MyPlansList
              planLists={this.state.myPlansList}
              onDeleted={this.deleteItem} />
          </div>
        </div>
      );
    } catch (err) {
      return <Redirect to='/login' />
    }
  };
};
