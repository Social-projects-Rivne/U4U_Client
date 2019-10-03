import React from 'react';
import './App.scss';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';


const App = () => {
    return (
        <div className="wrapper">
          <Header/>
          <Container/>
          <Footer/>
        </div>
    )
};

export default App;