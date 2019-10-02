import React, { useState, useEffect } from 'react';
import './app.scss';

import Login from "../pages/login/login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { PrNotifications } from '@i_oleksandr/prcomponents';
import touristService from '../../services/tourist-service';

const PrivateRoute = ({ Component }) => {
    const [state, setState] = useState({
        loading: true,
        status: null,
        err: null,
    });
    useEffect(async () => {
        touristService.checkToken()
            .then(res => {
                setState({
                    loading: false,
                    status: res.status,
                    err: false,
                })
            })
            .catch(err => {
                setState({
                    loading: false,
                    err
                })
            })
    }, []);

    if(state.loading) return <h1>Loading</h1>;
    if(state.err) return <h1>err</h1>;

    return <Component />;
};

const App = initialState => {
    const [state, setState] = useState({
        user: null
    });


    return (
        <>
            <Router>
                <Switch>
                     <PrivateRoute path='/secret' Component={() => <h1>Secret Page</h1>} />
                     <PrivateRoute path='/secret2' Component={() => <h1>Secret Page 2</h1>} />
                     <Route path='/' exact render={() => <h1>Public route</h1>} />
                     <Route path='/login' component={Login} />
                </Switch>
            </Router>

            <PrNotifications />
        </>
    )
};

export default App;
