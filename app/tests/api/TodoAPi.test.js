/* global localStorage */

var expect = require('expect');

var TodoAPI = require('../../api/TodoAPI.js');

describe('TodoAPI', () => {
    
    // call before every test to clear localStorage
    beforeEach(() => {
        localStorage.removeItem('todos');
    });
    
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });
    
    describe('filterTodos', () => {
        var todosArr = [
            {id: 1, text: 'test todo one', completed: true},
            {id: 2, text: 'test todo two', completed: false},
            {id: 3, text: 'test todo three', completed: true}
        ];
        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todosArr, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return only uncompleted items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todosArr, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todosArr, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });
        it('should search by keyword based on searchText', () => {
            var filteredTodos = TodoAPI.filterTodos(todosArr, true, 'two');
            expect(filteredTodos.length).toBe(1);
            expect(filteredTodos[0].id).toBe(2);
        });
        it('should return all todos if searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todosArr, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
    
});