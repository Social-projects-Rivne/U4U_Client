import React, { Component } from 'react';
import MyPlansListItems from '../my-plans-list-items/my-plans-list-items';
import './my-plans-list.scss';

export default class MyPlansList extends Component {
    

    render() {
        
        const { planLists, onDeleted } = this.props;
        const elements = planLists.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id}>
                    <MyPlansListItems 
                    {...itemProps}
                    onDeleted = {() => onDeleted(id)}/>
                </li>
            )
        })
        return (
            <ul>
                {elements}
            </ul>
        )
    };
};