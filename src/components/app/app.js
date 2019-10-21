import React, { useState } from 'react';
import useAuth from '../hocs/use-auth';
import './app.scss';

import Login from "../pages/login";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from "../contexts";

import PrivateRoute from "../private-route";
import MyPlans from '../my-plans/my-plans';
import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import UMap from '../uMap';
import SinglePlace from '../single-place';
import Error404 from '../error404';

const App = initialState => {
  const [state, setState] = useState({
    isAuth: false,
  });

  const onAuth = (status) => {
    setState({ ...state, isAuth: status })
  };

  const isAuth = useAuth(onAuth);

  return (
    <div className="wrapper">
      <AuthProvider value={state.isAuth}>
        <Router>
          <Header onAuth={onAuth} />
          <Container>
            <Switch>
              <PrivateRoute path='/secret'
                onAuth={onAuth}
                auth={state.isAuth}
                Component={() => <h1>Secret Page</h1>} />

              <Route path='/'
                exact component={UMap} />

              <Route path='/login'
                render={() => {
                  if (isAuth === null) return 'loading';
                  if (isAuth) {
                    return <Redirect to='/' />;
                  }

                  return <Login onAuth={onAuth} />
                }} />

              <Route path="/singleplace/:id"
                component={SinglePlace} />
              <Route path="/myplans/:id"
                component={MyPlans} />
              <Route component={Error404} />
            </Switch>
          </Container>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
};

export default App;
