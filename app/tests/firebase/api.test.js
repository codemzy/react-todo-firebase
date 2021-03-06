import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var api = require('../../firebase/api.js');

// the firebase connection
import firebase, {firebaseRef} from '../../firebase/index.js';

// the mock store
var createMockStore = configureMockStore([thunk]);

describe('Firebase Api', () => {
    it('should exist', () => {
        expect(api).toExist();
    });
    
    describe('Tests with firebase todos', () => {
        var testTodoRef;
        var uid;
        var todosRef;
        // add some todos to firebase for the tests
        beforeEach((done) => {
            var credential = firebase.auth.GithubAuthProvider.credential(process.env.GITHUB_TEST_TOKEN);
            firebase.auth().signInWithCredential(credential).then((user) => {
                uid = user.uid;
                todosRef = firebaseRef.child('users/' + uid +'/todos');
                return todosRef.remove();
            }).then(() => {
                testTodoRef = todosRef.push();
                return testTodoRef.set({
                    text: 'Something todo',
                    completed: false,
                    createdAt: 54632984
                });
            }).then(() => done())
            .catch(done);
        });
        // remove the todos when the tests are done
        afterEach((done) => {
            todosRef.remove().then(() => done());
        });
        it('should create todo and dispatch ADD_TODO', (done) => {
            // create an empty store
            const store = createMockStore({auth: {uid: uid}});
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
        it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
            const STORE = createMockStore({auth: {uid: uid}});
            const ACTION = api.startUpdateTodo(testTodoRef.key, true);
            STORE.dispatch(ACTION).then(() => {
                const MOCK_ACTIONS = STORE.getActions();
                expect(MOCK_ACTIONS[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key,
                });
                expect(MOCK_ACTIONS[0].updates).toInclude({
                    completed: true
                });
                expect(MOCK_ACTIONS[0].updates.completedAt).toExist();
                done();
            }, done);
        });
        it('should fetch todos and dispatch ADD_TODOS action', (done) => {
            const STORE = createMockStore({auth: {uid: uid}});
            const ACTION = api.startAddTodos();
            STORE.dispatch(ACTION).then(() => {
                const MOCK_ACTIONS = STORE.getActions();
                expect(MOCK_ACTIONS[0].type).toEqual('ADD_TODOS');
                expect(MOCK_ACTIONS[0].todos.length).toEqual(1);
                expect(MOCK_ACTIONS[0].todos[0].text).toEqual('Something todo');
                done();
            }, done);
        });
    });
});