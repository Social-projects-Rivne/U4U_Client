import React, { Component } from 'react';
import MyPlansHeader from './my-plans-header/my-plans-header';
import MyPlansList from './my-plans-list/my-plans-list';
import SearchPanel from './search-panel/search-panel';
import PlansListService from '../../services/plans-list-service';
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
    deleteItem = (_id) => {
        this.setState(({ myPlansList }) => {
            const elementIndex = myPlansList.filter(function (el) {
                return el._id !== _id
            })
            return {
                myPlansList: elementIndex
            }
        })
    }
    addItem = (comment) => {
        const newPlan = {
            comment: comment
        }
        console.log(this.addItem)
        this.setState(({ myPlansList }) => {
            const newPlansArray = [newPlan, ...myPlansList]
            return {
                myPlansList: newPlansArray
            }
        })
    }
    render() {
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
    };
};