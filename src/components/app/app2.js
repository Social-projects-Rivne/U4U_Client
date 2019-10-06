// import React, { Component } from 'react';
// import './app.scss';
//
// import Login from "../pages/login/login";
// import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//
// import { Notifications } from '../notify'
// import api from '../../services/tourist-service';
//
// const PrivateRoute = ({ Component, auth }) => {
//     // const [state, setState] = useState({
//     //         loading: true,
//     //         status: null,
//     //         err: null,
//     //     });
//     //
//     //     useEffect( () => {
//     //         api.checkAuth()
//     //             .then(res => {
//     //                 setState({
//     //                     ...state,
//     //                     loading: false,
//     //                     status: true,
//     //                 });
//     //             })
//     //             .catch(err => {
//     //                 setState({
//     //                     err
//     //                 });
//     //             });
//     //     }, []);
//     //
//     //     if(state.loading) return <h1>Loading</h1>;
//     //     if(state.err) return <Login />;
//     if(auth) {
//         return <Component />;
//     } else {
//
//     }
// };
//
// const Homepage = ({ his// import React, { Component } from 'react';
// // import './app.scss';
// //
// // import Login from "../pages/login/login";
// // import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// //
// // import { Notifications } from '../notify'
// // import api from '../../services/tourist-service';
// //
// // const PrivateRoute = ({ Component, auth }) => {
// //     // const [state, setState] = useState({
// //     //         loading: true,
// //     //         status: null,
// //     //         err: null,
// //     //     });
// //     //
// //     //     useEffect( () => {
// //     //         api.checkAuth()
// //     //             .then(res => {
// //     //                 setState({
// //     //                     ...state,
// //     //                     loading: false,
// //     //                     status: true,
// //     //                 });
// //     //             })
// //     //             .catch(err => {
// //     //                 setState({
// //     //                     err
// //     //                 });
// //     //             });
// //     //     }, []);
// //     //
// //     //     if(state.loading) return <h1>Loading</h1>;
// //     //     if(state.err) return <Login />;
// //     if(auth) {
// //         return <Component />;
// //     } else {
// //
// //     }
// // };
// //
// // const Homepage = ({ history }) => {
// //     return (
// //         <>
// //             <ul>
// //                 <li onClick={() => history.push('/login') }>Public route</li>
// //                 <li onClick={() => history.push('/secret')}>Secret page</li>
// //             </ul>
// //             <>
// //     )
// // }
// //
// // class App extends Component {
// //
// //     state = {
// //         isAuth: false,
// //         // checks if the useEffect is fulfilled
// //         _isInit: false,
// //     }
// //
// //     componentWillMount() {
// //         api.checkAuth()
// //             .then(res => {
// //                 this.setState({ isAuth: true, _isInit: true });
// //             });
// //     }
// //
// //     render() {
// //         const { _isInit, isAuth } = this.state;
// //
// //         if(!_isInit) return 'loading';
// //
// //         return (
// //             <>
// //                 <Router>
// //                     <Switch>
// //                         <PrivateRoute path='/secret' onAuth={true}
// //                                       auth={isAuth}
// //                                       Component={() => <h1>Secret Page</h1>} />
// //                         <Route path='/' exact render={({history}) => {
// //                                     return <Homepage history={history} />
// //                                 } }/>
// //                         <Route path='/login' render={({ history }) => {
// //                             if(isAuth) {
// //                                 return <Redirect to='/pub2' />
// //                             } else {
// //                                 return <Login />;
// //                             }
// //                         }} />
// //                         <Route path='/pub2' render={() => <h1>Pub 2</h1>} />
// //                     </Switch>
// //                 </Router>
// //
// //                 <Notifications />
// //             </>
// //         )
// //     }
// // };
// //
// // export default App;tory }) => {
//     return (
//         <>
//             <ul>
//                 <li onClick={() => history.push('/login') }>Public route</li>
//                 <li onClick={() => history.push('/secret')}>Secret page</li>
//             </ul>
//             <>
//     )
// }
//
// class App extends Component {
//
//     state = {
//         isAuth: false,
//         // checks if the useEffect is fulfilled
//         _isInit: false,
//     }
//
//     componentWillMount() {
//         api.checkAuth()
//             .then(res => {
//                 this.setState({ isAuth: true, _isInit: true });
//             });
//     }
//
//     render() {
//         const { _isInit, isAuth } = this.state;
//
//         if(!_isInit) return 'loading';
//
//         return (
//             <>
//                 <Router>
//                     <Switch>
//                         <PrivateRoute path='/secret' onAuth={true}
//                                       auth={isAuth}
//                                       Component={() => <h1>Secret Page</h1>} />
//                         <Route path='/' exact render={({history}) => {
//                                     return <Homepage history={history} />
//                                 } }/>
//                         <Route path='/login' render={({ history }) => {
//                             if(isAuth) {
//                                 return <Redirect to='/pub2' />
//                             } else {
//                                 return <Login />;
//                             }
//                         }} />
//                         <Route path='/pub2' render={() => <h1>Pub 2</h1>} />
//                     </Switch>
//                 </Router>
//
//                 <Notifications />
//             </>
//         )
//     }
// };
//
// export default App;
