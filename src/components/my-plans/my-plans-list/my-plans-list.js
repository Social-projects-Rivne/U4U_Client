import React, { Component } from 'react';
import MyPlansListItems from '../my-plans-list-items/my-plans-list-items';
import './my-plans-list.scss';

export default class MyPlansList extends Component {

    render() {
        const { planLists, onDeleted } = this.props;
        const elements = planLists.map((item) => {
            const { _id, ...itemProps } = item;
            return (
                <li key={_id}>
                    <MyPlansListItems
                        {...itemProps}
                        onDeleted={() => onDeleted(_id)} />
                </li>
            )
        })
        if (planLists.length == 0) {
            return (
                <p>
                    Your plans list is empty. Add some places and enjoy travelling!
                </p>
            )
        }
        else {
            return (
                <ul>
                    {elements}
                </ul>
            )
        }
    };
};