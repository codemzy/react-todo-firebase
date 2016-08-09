// Router set up
var React = require('react');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load firebase
import firebase from '../firebase/index.js';

// Components
var Main = require('../components/Main');
var About = require('../components/About');
var TodoApp = require('../components/TodoApp');
import Account from '../components/LogOn';
import SignOut from '../components/LogOut';

// middleware to redirect to login page if not logged in
var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};

// middleware to redirect to todos page if logged in
var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/todos');
    }
    next();
};

// Routes
var routes = (store) => {
    return (
    <Provider store={store}>
        <Router history={hashHistory}> 
            <Route path="/" component={Main}>
                <IndexRoute component={Account} onEnter={redirectIfLoggedIn}/>
                <Route path='/todos' header='App' component={TodoApp} onEnter={requireLogin}/>
                <Route path='/about' header='About' component={About} />
                <Route path='/logout' header='Log Out' component={SignOut} onEnter={requireLogin} />
            </Route>
        </Router>
    </Provider>
    );
};

module.exports = routes;