import React, { Component } from "react";
import "./app.scss";

import Login from "../pages/login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { AuthProvider } from "../contexts";

import PrivateRoute from "../private-route";
import MyPlans from "../my-plans/my-plans";
import Header from "../header";
import Container from "../container";
import Footer from "../footer";
import UMap from "../uMap";
import SinglePlace from "../single-place";
import PlacesList from "../pages/places-list";
import Error404 from "../error404";
import Search from "../search";
import Profile from "../profile";
import UserService from "../../services/user-service";
import Register from "../register/register";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: false,
      user: null,
      startAuth: false
    };
  }

  async componentDidMount() {
    await this.getUserData();
  }

  getUserData = async () => {
    try {
      this.setState({ startAuth: true });
      const user = await UserService.getUserData();

      this.setState({ isAuth: true, startAuth: false, user: user });
    } catch (error) {
      this.setState({ isAuth: false, startAuth: false, user: null });
    }
  };

  onAuth = async status => {
    await this.getUserData();
  };

  render() {
    return (
      <div className="wrapper">
        <AuthProvider value={this.state.isAuth}>
          <Router>
            <Header
              startAuth={this.state.startAuth}
              user={this.state.user}
              onAuth={this.onAuth}
            />
            <Container>
              <Switch>
                <PrivateRoute
                  path="/secret"
                  onAuth={this.onAuth}
                  auth={this.state.isAuth}
                  Component={() => <h1>Secret Page</h1>}
                />

                <Route path="/" exact component={UMap} />

                <Route
                  path="/login"
                  render={() => {
                    if (this.state.isAuth === null) return "loading";
                    if (this.state.isAuth) {
                      return <Redirect to="/" />;
                    }

                    return <Login onAuth={this.onAuth} />;
                  }}
                />

                <Route path="/singleplace/:id" component={SinglePlace} />
                <Route path="/myplans/:id" component={MyPlans} />
                <Route
                  path="/profile"
                  render={props => <Profile user={this.state.user} />}
                />

                <Route path="/search" component={Search} />
                <Route path='/register' render={() => <Register onAuth={this.onAuth} />} />

                <Route
                  path="/places-list/filter/region=:regionId"
                  component={PlacesList}
                />
                <Route path="/places-list/" component={PlacesList} />

                <Route component={Error404} />
              </Switch>
            </Container>
            <Footer />
          </Router>
        </AuthProvider>
      </div>
    );
  }
}
