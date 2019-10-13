import React, {Component } from 'react';
import './my-plans.scss';
import MyPlansHeader from './my-plans-header/my-plans-header';
import MyPlansList from './my-plans-list/my-plans-list';
import AddingPlaceSection from './adding-place-section/adding-place-section';



export default class MyPlans extends Component{
    state ={
        todoData:[
            {label: 'Visit Lviv', important: false, id: 1},
            {label: 'Visit Rivne', important: false, id: 2},
            {label: 'Visit Odessa', important: false, id: 3},
            {label: 'Visit Lviv', important: false, id: 1},
            {label: 'Visit Rivne', important: false, id: 2},
            {label: 'Visit Odessa', important: false, id: 3}
        ]
    }
    deleteItem = (id) =>{
       this.setState(({todoData}) => {
       const elementIndex = todoData.findIndex((el) => el.id === id)
       const newArray = [
           ...todoData.slice(0, elementIndex), 
           ...todoData.slice(elementIndex+1)]
       return{
           todoData:newArray
       }
       })
    }
    addItem = (text) =>{
        console.log('Added', text)
    }
    render(){
        return(
            <div className = "my-plans" >
                <div className ='my-plans-adding-header-section'>
                <MyPlansHeader />
                <AddingPlaceSection onItemAdded = {this.addItem}/>
                </div>
                <MyPlansList 
                todos = {this.state.todoData}
                onDeleted = {(this.deleteItem)} />
            </div>
        )
    };
};