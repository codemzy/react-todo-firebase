var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.scss');

// Load API
var api =  require('./firebase/api.js');

console.log(process.env.NODE_ENV);
console.log(process.env.FIREBASE_API);

// REDUX
// Load actions
var actions = require('./actions/actions');
// Load store
var store = require('./store/configureStore').configure();

store.dispatch(api.startAddTodos());

// routes - passing store for Provider
var routes = require('./config/router')(store);

ReactDOM.render(routes, document.getElementById('app'));