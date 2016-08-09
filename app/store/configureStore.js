import * as redux from 'redux';
import thunk from 'redux-thunk';

// reducers
var {searchTextReducer, showCompletedReducer, todosReducer, authReducer} = require('./../reducers/reducers.js');

export var configure = (initialState = {}) => {
    // combine the reducers
    var reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    });
    
    // set up the store
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
    
    // return the store
    return store;
};
