'use strict';

var moment = require('moment');

import firebase, {firebaseRef} from '../firebase/index.js';
var actions =  require('./../actions/actions.js');


export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = { text: text, completed: false, createdAt: moment().unix(), completedAt: false };
        // update firebase
        var todoRef = firebaseRef.child('todos').push(todo);
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
        var todosRef = firebaseRef.child('todos');
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
        var todoRef = firebaseRef.child('todos/' + id);
        var updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };
        return todoRef.update(updates).then(() => {
            dispatch(actions.updateTodo(id, updates));
        });
    };
};