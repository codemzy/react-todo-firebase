export var setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText: searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo: todo
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos: todos
    };
};

export var updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id: id,
        updates: updates
    };
};

export var loginUser = (uid, username) => {
    return {
        type: 'LOGIN',
        uid: uid,
        username: username
    };
};

export var logoutUser = () => {
    return {
        type: 'LOGOUT'
    };
};