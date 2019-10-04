import React from 'react';
import './Container.scss';
import UMap from './../uMap';

const Container = ({ children }) => {
    return (
        <main className="content">
           { children }
        </main>
    )
};

export default Container;