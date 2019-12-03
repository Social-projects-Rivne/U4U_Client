import React, {Component} from "react";
import api from "../../services/tourist-service";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

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

        return <Route path={path} render={({ history }) => {
            if(loading) return 'loading';

            localStorage.setItem('prevPath', path);
            if(!status) return <Redirect to='/login' />;
            return <Component />
        }} />
    }
}

export default PrivateRoute;