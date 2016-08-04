var React = require('react');

// components
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import TodoSearch from './TodoSearch.js';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <div className="todowrap">
                    <TodoSearch />
                    <TodoList />
                    <TodoForm />
                </div>
            </div>
        );
    }
}

module.exports = TodoApp;