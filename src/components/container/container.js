import React from 'react';
import './container.scss';

const Container = ({ children }) => {
    return (
        <main className="content">
            <div className="container">
                {children}
            </div>
        </main>
    )
};

export default Container;