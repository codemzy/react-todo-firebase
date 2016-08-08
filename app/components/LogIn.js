var React = require('react');

class LogIn extends React.Component {
    
    render() {
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <h1 className="text-center page-title">Login</h1>
                <br />
                <div className="text-center callout account-callout">
                    <p>Log in with your Github account.</p>
                    <a href="#" className="button expanded">Log in with Github</a>
                </div>
            </div>
        );
    }

}

module.exports = LogIn;