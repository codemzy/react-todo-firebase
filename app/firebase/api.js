'use strict';

var moment = require('moment');

import firebase, {firebaseRef, githubProvider} from '../firebase/index.js';
var actions =  require('./../actions/actions.js');


export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = { text: text, completed: false, createdAt: moment().unix(), completedAt: false };
        // update firebase
        var uid = getState().auth.uid; // get the uid for the user from state
        var todoRef = firebaseRef.child('users/' + uid + '/todos').push(todo);
        return todoRef.then(() => {
            // on successful update of DB dispatch action to update redux state
            dispatch(actions.addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};

export var startAddTodos = () => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid; // get the uid for the user from state
        var todosRef = firebaseRef.child('users/' + uid + '/todos');
        return todosRef.once('value').then((snapshot) => {
            var todos = snapshot.val() || {};
            // convert to an array for Redux
            var parsedTodos = [];
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(actions.addTodos(parsedTodos));
        }, (error) => {
            console.log('Unable to fetch value', error);
        });
    };
};

export var startUpdateTodo = (id, completed) => {
    return (dispatch, getState) => {
        var uid = getState().auth.uid; // get the uid for the user from state
        var todoRef = firebaseRef.child('users/' + uid + '/todos/' + id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(() => {
            dispatch(actions.updateTodo(id, updates));
        });
    };
};

export var startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then((result) => {
            console.log('Auth worked', result);
        }, (error) => {
            console.log('Unable to auth', error);
        });
    };
};

export var startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(() => {
            console.log("Logged Out");
        });
    };
};