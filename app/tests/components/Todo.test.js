var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

// get the Todo export (not default export) to just grab the component
import {Todo} from '../../components/Todo.js';
// get the api actions file...
import * as api from '../../firebase/api.js';

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });
    
    it('should dispatch TOGGLE_TODO action on click', () => {
        var todoData = {id: 11, text: 'Test text', completed: true };
        var action = api.startUpdateTodo(todoData.id, !todoData.completed);
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
});