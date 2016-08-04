var expect = require('expect');

var actions = require('../../actions/actions.js');

describe('Actions', () => {
    it('should exist', () => {
        expect(actions).toExist();
    });
    it('should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action);
    });
    it('should generate toggle showCompleted action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        expect(res).toEqual(action);
    });
    it('should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });
    it('should generate add todos action', () => {
        var todos = [{id: 111, text: 'Anything', completed: false, completedAt: false, createdAt: 500}];
        var action = {
            type: 'ADD_TODOS',
            todos: todos
        };
        var res = actions.addTodos(todos);
        expect(res).toEqual(action);
    });
    it('should generate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        var res = actions.toggleTodo(action.id);
        expect(res).toEqual(action);
    });
});