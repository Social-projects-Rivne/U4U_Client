import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import UMap from '../uMap';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Container>
          <Route
            path="/"
            component={UMap}
            exact />

          <Route
            path="/my-plans"
            render={() => <h2 style={{ fontSize: '5rem', color: '#fff', paddingTop: '5rem', textAlign: 'center' }}>
              MY Plans Page
            </h2>} />

          <Route
            path="/places-list"
            component={UMap} />
        </Container>
        <Footer />
      </Router>
    </div >
  )
};

export default App;