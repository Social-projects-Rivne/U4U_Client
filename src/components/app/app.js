import React, { useState, useEffect, Component } from 'react';
import useAuth from '../hocs/useAuth';
import './app.scss';

import Login from "../pages/login/login";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { Notifications } from '../notify'
import api from '../../services/tourist-service';

const Homepage = ({ history }) => {
 return (
     <ul>
         <li onClick={() => history.push('/login')}>Login</li>
         <li onClick={() => history.push('/secret')}>Secret</li>
     </ul>
 )
};

class PrivateRoute extends Component {
    state = {
        loading: !this.props.isAuth,
        status: null
    };

    checkAuth = () => {
      this.setState({ loading: true });
      api.checkAuth()
          .then(res => {
              this.setState({ loading: false, status: true });
              this.props.onAuth(true);
          })
          .catch(err => {
              this.props.onAuth(false);
              this.setState({ loading: false, status: false });
          })
    };

    componentDidMount() {
        if(!this.props.isAuth) {
            this.checkAuth();
        }
    }

    render() {
        const { Component, path } = this.props;
        const { loading, status } = this.state;

        if(loading) return 'loading';
        if(!status) return <Login path={path} />;

        return <Component />
    }
}

const App = initialState => {
    const [state, setState] = useState({
        isAuth: false,
    });

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
