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
   if (action.type === 'TOGGLE_TODO') {
        var updatedTodos = state.map(function(todo) {
            if (todo.id === action.id) {
                todo.completed = !todo.completed;
                todo.completedAt = todo.completed ? moment().unix() : false;
            }
            return todo;
        });
       return updatedTodos;
   } 
   if (action.type === 'ADD_TODOS') {
       return [
        ...state,
        ...action.todos
        ];
   }
   return state;
};