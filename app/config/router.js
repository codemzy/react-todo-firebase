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

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
});

// Routes
var routes = (store) => {
    return (
    <Provider store={store}>
        <Router history={hashHistory}> 
            <Route path="/" component={Main}>
                <IndexRoute component={Account} />
                <Route path='/todos' header='App' component={TodoApp} />
                <Route path='/about' header='About' component={About} />
                <Route path='/logout' header='Log Out' component={SignOut} />
            </Route>
        </Router>
    </Provider>
    );
};

module.exports = routes;