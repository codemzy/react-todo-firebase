import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var api = require('../../firebase/api.js');

// the mock store
var createMockStore = configureMockStore([thunk]);

describe('Firebase Api', () => {
    it('should exist', () => {
        expect(api).toExist();
    });
    it('should create todo and dispatch ADD_TODO', (done) => {
        // create an empty store
        const store = createMockStore({});
        const todoText = 'My todo item';
        store.dispatch(api.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });
});