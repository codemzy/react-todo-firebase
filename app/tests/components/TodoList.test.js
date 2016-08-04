var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// import using import not require to get both the default (ConnectedTodoList) and the other export
import ConnectedTodoList, {TodoList} from '../../components/TodoList.js';
// var TodoList = require('../../components/TodoList.js');
import ConnectedTodo, {Todo} from '../../components/Todo.js';
// var Todo = require('../../components/Todo.js');

// store
// var configureStore = require('../../store/configureStore.js');
// now we can just call configure instead of configureStore.configure using destructuring below
import {configure} from '../../store/configureStore.js';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });
    
    it('should render one Todo component for each todo item', () => {
        var todos = [
            { id: 1, text: "Test item 1", completed: false, completedAt: false, createdAt: 500 },
            { id: 2, text: "Test item 2", completed: false, completedAt: false, createdAt: 500 }
        ];
        var store = configure({
            todos: todos
        });
        var provider = TestUtils.renderIntoDocument(<Provider store={store}><ConnectedTodoList /></Provider>);
        var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
        expect(todosComponents.length).toBe(todos.length);
    });
    
    it('should render empty message if no todos', () => {
        var todos = [];
        var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        var $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find('.todo-nomessage').length).toBe(1);
    });
});