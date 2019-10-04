import React from 'react';
import './App.scss';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import UMap from '../uMap';


const App = () => {
    return (
        <div className="wrapper">
          <Header/>
          <Container>
            <Router>
              <Route path="/" component={UMap} />
              <Route path="/place/:id" component={Place} />
            </Router>
            </Container>
          <Footer/>
        </div>
    )
};

export default App;