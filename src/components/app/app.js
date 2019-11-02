import React, { useState, useEffect } from 'react';
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
import PlacesList from '../pages/places-list';
import Error404 from '../error404';
import Search from '../search';
import Profile from '../profile';
import TokenService from "../../services/token-service";
import UserService from "../../services/user-service";

const App = initialState => {
  const [state, setState] = useState({
    isAuth: false,
    user: null,
  });

  useEffect(() => {
    async function getUser() {
      try {
       const user = await UserService.getUserData();

        if(user) {
          setState({ ...state, user: user })
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  });

  const onAuth = (status) => {
    setState({ ...state, isAuth: status })
  };

  if(!state.isAuth) {
    if (TokenService.getToken()) {
      setState({ ...state, isAuth: true })
    }
  }

  return (
    <div className="wrapper">
      <AuthProvider value={state.isAuth}>
        <Router>
          <Header user={state.user} isAuth={state.isAuth} onAuth={onAuth} />
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
                  if (state.isAuth === null) return 'loading';
                  if (state.isAuth) {
                    return <Redirect to='/' />;
                  }

                  return <Login onAuth={onAuth} />
                }} />

              <Route path="/singleplace/:id"
                component={SinglePlace} />
              <Route path="/myplans/:id"
                component={MyPlans} />
                <Route path="/profile"  component={Profile} /> 

              <Route path="/my-profile"
                component={Profile} />

              <Route path="/search"
                component={Search} />

              <Route path="/places-list/"
                component={PlacesList} />

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
