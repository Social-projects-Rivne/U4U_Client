import React, { Component } from 'react';
import MyPlansHeader from './my-plans-header/my-plans-header';
import MyPlansList from './my-plans-list/my-plans-list';
import SearchPanel from './search-panel/search-panel';
import PlansListService from '../../services/plans-list-service';
import Redirect from 'react-router-dom/es/Redirect';
import TokenService from './../../services/token-service';
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
    this.getPlansList();
  }
  getPlansList = () => {
    this.service.getPlansList()
      .then((plansList) => {
        this.setState({ myPlansList: plansList })
      }).catch((error) => {
        console.log(error)
      })
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
    if ((placeName) && (placeName.trim() !== '') && placeName !== 'There is no such a place') {
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
      const jwt = TokenService.getToken();
      return (
        <div className="my-plans" >
          <div className='my-plans-adding-header-section'>
            <MyPlansHeader />
            <SearchPanel onButtonAddClick={this.addItem} />
          </div>
          <MyPlansList
            planLists={this.state.myPlansList}
            onDeleted={this.deleteItem} />
        </div>
      )
    }
    catch (e) {
      return <Redirect to='/login' />
    }
  };
};
