import React, { useState } from 'react';
import useAuth from '../hocs/use-auth';
import './app.scss';

import Login from "../page/login";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from "../contexts";

import PrivateRoute from "../private-route";

import Header from '../header';
import Container from '../container';
import Footer from '../footer';
import UMap from '../uMap';
import SinglePlace from '../single-place';

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
                            <Route path="/singleplace/:id"  component={SinglePlace} />
                        </Switch>
                    </Container>
                    <Footer />
                </Router>
            </AuthProvider>
        </div>
    )
};

export default App;
