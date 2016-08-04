var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from '../../components/TodoSearch.js';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });
    
    // test if onSearch called with entered text
    it('should dispatch SET_SEARCH_TEXT with entered input text', () => {
        var searchText = 'search';
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        todoSearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(action);
    });
    // test if onSearch called with checked value
    it('should dispatch TOGGLE_SHOW_COMPLETED with proper checked value', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        expect(spy).toHaveBeenCalledWith(action);
    });
    
});