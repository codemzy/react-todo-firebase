var React = require('react');
var ReactDOM = require('react-dom');

// Load foundation
require('foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Load own css
require('./styles/styles.scss');

// Load API
var TodoAPI = require('./api/TodoAPI.js');

// REDUX
// Load actions
var actions = require('./actions/actions');
// Load store
var store = require('./store/configureStore').configure();
// Subscribe to changes
store.subscribe(() => {
    var state = store.getState();
    console.log('New state', state);
    TodoAPI.setTodos(state.todos);
});

// get the todos from local storage
var initialTodos = TodoAPI.getTodos();
// add the todos to our state
store.dispatch(actions.addTodos(initialTodos));

// routes - passing store for Provider
var routes = require('./config/router')(store);

ReactDOM.render(routes, document.getElementById('app'));