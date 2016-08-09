var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory} = require('react-router');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.scss');

// REDUX
// Load actions
var actions = require('./actions/actions');
// Load store
var store = require('./store/configureStore').configure();

// Load firebase
import firebase from './firebase/index.js';
// Load API
var api =  require('./firebase/api.js');

// routes - passing store for Provider
var routes = require('./config/router')(store);

// redirect on log in and log out
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // log user in
        store.dispatch(actions.loginUser(user.uid, user.displayName));
        // get todos from firebase
        store.dispatch(api.startAddTodos());
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logoutUser());
        hashHistory.push('/');
    }
});

ReactDOM.render(routes, document.getElementById('app'));