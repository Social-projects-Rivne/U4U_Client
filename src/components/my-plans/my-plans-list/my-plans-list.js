import React, { Component } from 'react';
import MyPlansListItems from '../my-plans-list-items/my-plans-list-items';
import './my-plans-list.scss';

export default class MyPlansList extends Component {
    render() {
        const { planLists, onDeleted } = this.props;
        const elements = planLists.map((item) => {
            return (
                <li key={item._id}>
                    <MyPlansListItems
                        {...item}
                        onDeleted={() => { onDeleted(item._id) }} />
                </li>
            )
        })
        if (planLists.length === 0) {
            return (
                <p id='empty-list-message'>
                    Your plans list is empty. Add some places and enjoy travelling!
                </p>
            )
        }
        else {
            return (
                <div id='search-items-list'>
                    <ul>
                        {elements}
                    </ul>
                </div>
            )
        }
    };
};