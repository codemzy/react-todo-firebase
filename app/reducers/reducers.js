var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
    if (action.type === 'SET_SEARCH_TEXT') {
        return action.searchText;
    }
    return state;
};

export var showCompletedReducer = (state = false, action) => {
    if (action.type === 'TOGGLE_SHOW_COMPLETED') {
        return !state; // returns true if was false and visa versa
    }
    return state;
};

export var todosReducer = (state = [], action) => {
   if (action.type === 'ADD_TODO') {
       return [
          ...state,
          action.todo
        ];
   } 
   if (action.type === 'UPDATE_TODO') {
        var updatedTodos = state.map(function(todo) {
            if (todo.id === action.id) {
                return {
                    ...todo,
                    ...action.updates
                };
            } else {
                return todo;
            }
        });
       return updatedTodos;
   } 
   if (action.type === 'ADD_TODOS') {
       return [
        ...state,
        ...action.todos
        ];
   }
   if (action.type === 'LOGOUT') {
       return [];
   }
   return state;
};

export var authReducer = (state = {}, action) => {
    if (action.type === 'LOGIN') {
        return { uid: action.uid, username: action.username };
    }
    if (action.type === 'LOGOUT') {
        return {};
    }
    return state;
};