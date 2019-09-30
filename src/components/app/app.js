import React from 'react';
import './app.scss';
import Header from '../header/header';
import Container from '../container/container';
import Footer from '../footer/footer';


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