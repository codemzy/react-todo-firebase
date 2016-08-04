var expect = require('expect');

var reducers = require('../../reducers/reducers.js');

describe('Reducers', () => {
    it('should exist', () => {
        expect(reducers).toExist();
    });
    
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducers.searchTextReducer('', action);
            expect(res).toEqual(action.searchText);
        });
    });
    
    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = reducers.showCompletedReducer(false, action);
            expect(res).toEqual(true);
        });
    });
    
    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'A new todo'
            };
            var res = reducers.todosReducer([], action);
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });
        it('should toggle todo completed', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: 11
            };
            var todosArray = [{id: 11, text: 'Test text', completed: false, createdAt: '', completedAt: '' }];
            var res = reducers.todosReducer(todosArray, action);
            expect(res[0].completed).toEqual(true);
        });
        it('should add existing todos', () => {
            var todos = [{id: 111, text: 'Anything', completed: false, completedAt: false, createdAt: 500}];
            var action = {
                type: 'ADD_TODOS',
                todos: todos
            };
            var res = reducers.todosReducer([], action);
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });
    });
});