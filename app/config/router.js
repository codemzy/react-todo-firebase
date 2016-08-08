// Router set up
var React = require('react');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var About = require('../components/About');
var TodoApp = require('../components/TodoApp');
import Account from '../components/LogOn';

// Routes
var routes = (store) => {
    return (
    <Provider store={store}>
        <Router history={hashHistory}> 
            <Route path="/" component={Main}>
                <IndexRoute component={TodoApp} />
                <Route path='/about' header='About' component={About} />
                <Route path='/logon' header='Log On' component={Account} />
            </Route>
        </Router>
    </Provider>
    );
};

module.exports = routes;