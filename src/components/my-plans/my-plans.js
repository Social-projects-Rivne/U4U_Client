import React, {Component } from 'react';
import './my-plans.scss';
import MyPlansHeader from './my-plans-header/my-plans-header';
import MyPlansList from './my-plans-list/my-plans-list';
import AddItemButton from './add-item-button/add-item-button';
import SearchPanel from './search-panel/search-panel';
//import AddingPlaceSection from './adding-place-section/adding-place-section';



export default class MyPlans extends Component{
  
    state = {
        myPlansList:[
            {label: 'Visit Lviv', id: 1},
            {label: 'Visit Rivne', id: 2},
            {label: 'Visit Odessa', id: 3},
            {label: 'Visit Lviv', id: 4},
            {label: 'Visit Rivne', id: 5},
            {label: 'Visit Odessa', id: 6},
            {label: 'Visit Lviv', id: 7}
        ]
    }
    deleteItem = (id) =>{
       this.setState(({myPlansList}) => {
       const elementIndex = myPlansList.filter(function(el){
           return el.id !== id
       } )
       return{
           myPlansList:elementIndex
       }
       })
    }
    
    addItem = (text) =>{
      const newPlan = {
          label: text,
          id: 1
      }
      this.setState(({myPlansList})=>{
          const newPlansArray = [...myPlansList, newPlan]
          return{
              myPlansList:newPlansArray
          }
      })
    }
    render(){
        return(
            <div className = "my-plans" >
                <div className ='my-plans-adding-header-section'>
                <MyPlansHeader />
                <div className = 'search-panel'>
                    {/* <AddingPlaceSection onButtonAddClick = {this.addItem}/> */}
                 <SearchPanel/>
                 <AddItemButton onButtonAddClick = {this.addItem}/>
                </div>
                </div>
                <MyPlansList 
                planLists = {this.state.myPlansList}
                onDeleted = {this.deleteItem} />
            </div>
        )
    };
};