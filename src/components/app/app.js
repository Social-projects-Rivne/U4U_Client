import React, { useState } from 'react';
import useAuth from '../hocs/useAuth';
import './App.scss';

import Login from "../login/Login";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from "../private-route";

import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import UMap from '../uMap';

const App = initialState => {
    const [state, setState] = useState({
        isAuth: false,
    });

    const isAuth = useAuth();

    const onAuth = (status) => {
        setState({ ...state, isAuth: status })
    };

    return (
        <div className="wrapper">
            <Router>
                <Header />
                <Container>
                    <Switch>
                        <PrivateRoute path='/secret' onAuth={onAuth}
                            auth={state.isAuth}
                            Component={() => <h1>Secret Page</h1>} />

                        <Route path='/' exact component={UMap} />
                        <Route path='/login' render={() => {
                            if (isAuth === null) return 'loading';
                            if (isAuth) {
                                return <Redirect to='/' />;
                            }

                            return <Login />
                        }} />
                    </Switch>
                </Container>
                <Footer />
            </Router>
        </div>
    )
};

export default App;
