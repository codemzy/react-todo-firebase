var $ = require('jquery');
/* global localStorage */

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log("error with JSON parse");
        }
        if ($.isArray(todos)) {
            return todos;
        } else {
            return [];
        }
    },
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;
        searchText = searchText.toLowerCase();
        // filter by showCompleted
        filteredTodos = filteredTodos.filter(function(todo) {
            // return the todo if it is false (not completed) OR if showCompleted is true return the item regardless
            return !todo.completed || showCompleted;
        });
        
        // filter by searchText
        if (searchText.length > 0) {
            filteredTodos = filteredTodos.filter(function(todo) {
                var text = todo.text.toLowerCase();
                return text.indexOf(searchText) === -1 ? false : true;
            });
        }
        // Sort todos with none-completed first at the start of the array
        filteredTodos.sort((a, b) => {
            if (a.completed === false && b.completed === true) {
                return -1;
            } else if (a.completed === true && b.completed === false) {
                return 1;
            } else {
                return 0;
            }
        });
        // return the filteredTodos
        return filteredTodos;
    }
};