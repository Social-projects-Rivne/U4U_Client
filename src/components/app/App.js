import React, { useState } from 'react';
import useAuth from '../hocs/useAuth';
import './app.scss';

import Login from "../pages/login/login";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Notifications } from '../notify'

import PrivateRoute from "../private-route";


const Homepage = ({ history }) => {
 return (
     <ul>
         <li onClick={() => history.push('/login')}>Login</li>
         <li onClick={() => history.push('/secret')}>Secret</li>
     </ul>
 )
};

const App = initialState => {
    const [state, setState] = useState({
        isAuth: false,
    });

    const isAuth = useAuth();

    const onAuth = (status) => {
        setState({  ...state, isAuth: status })
    };

    return (
        <>
            <Router>
                <Switch>
                     <PrivateRoute path='/secret' onAuth={onAuth}
                                   auth={state.isAuth}
                                   Component={() => <h1>Secret Page</h1>} />

                     <Route path='/' exact render={({history}) => {
                         return <Homepage history={history} />
                     }}/>
                     <Route path='/login' render={() => {
                        if(isAuth === null) return 'loading';
                        if(isAuth) {
                           return <Redirect to='/' />;
                        }

                       return <Login />
                     }}/>
                     <Route path='/pub2' render={() => <h1>Pub 2</h1>} />
                </Switch>
            </Router>

            <Notifications />
        </>
    )
};

export default App;
