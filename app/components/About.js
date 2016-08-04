var React = require('react');
var {Link} = require('react-router');

var MainComponent = () => {
    
    return (
        <div>
            <h1 className="text-center page-title">About ToDoTiger</h1>
            <p>The ToDoTiger will help you keep track of your tasks, and will stare at you with a disapproving glare until you complete them.</p>
            <p>This version of the ToDoTiger stores your task in the local browser storage.</p>
            <p>Built with ReactJS, NodeJS, Express, Foundation, Sass and Webpack.</p>
            <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
            <br />
            <div className="text-center callout">
                <p>Built by codemzy.</p>
                <a href="https://www.twitter.com/codemzy" target="_blank"><i className="fa fa-twitter"></i> Twitter</a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/codemzy" target="_blank"><i className="fa fa-github"></i> GitHub</a>&nbsp;&nbsp;&nbsp;
                <a href="https://codemzy.github.io" target="_blank"><i className="fa fa-th"></i> Portfolio</a>
            </div>
        </div>
    );

};

module.exports = MainComponent;