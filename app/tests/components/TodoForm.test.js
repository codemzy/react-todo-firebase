var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var {TodoForm} = require('../../components/TodoForm.js');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });
    
    // test if onAdd called with valid data
    it('should dispatch addTodo if valid text entered', () => {
        var todoText = 'Check mail';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        };
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.text.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith(action);
    });
    // test if onAdd called with invalid data
    it('should not dispatch addTodo if no text entered', () => {
        var spy = expect.createSpy();
        var todoForm = TestUtils.renderIntoDocument(<TodoForm dispatch={spy}/>);
        var $el = $(ReactDOM.findDOMNode(todoForm));
        todoForm.refs.text.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toNotHaveBeenCalled();
    });
    
});