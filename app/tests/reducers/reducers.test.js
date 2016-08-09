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
                todo: {id: 111, text: 'Anything', completed: false, completedAt: false, createdAt: 500}
            };
            var res = reducers.todosReducer([], action);
            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });
        it('should toggle todo', () => {
            var updates = {
                completed: false,
                completedAt: false
            };
            var action = {
                type: 'UPDATE_TODO',
                id: 11,
                updates: updates
            };
            var todosArray = [{id: 11, text: 'Test text', completed: true, createdAt: '', completedAt: '' }];
            var res = reducers.todosReducer(todosArray, action);
            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todosArray[0].text);
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
    
    describe('authReducer', () => {
        it('should login user', () => {
            var action = {
                type: 'LOGIN',
                uid: '123'
            };
            var res = reducers.authReducer({}, action);
            expect(res).toEqual({ uid: action.uid });
        });
        it('should logout user', () => {
            var action = {
                type: 'LOGOUT'
            };
            var res = reducers.authReducer({}, action);
            expect(res).toEqual({});
        });
    });
});