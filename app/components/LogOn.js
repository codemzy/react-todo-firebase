var React = require('react');
var Redux = require('react-redux');

// api
var api =  require('./../firebase/api.js');

export class LogOn extends React.Component {
    
    _onLogin() {
        var {dispatch} = this.props;
        dispatch(api.startLogin());
    }
    
    render() {
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <h1 className="text-center page-title">Login</h1>
                <br />
                <div className="text-center callout account-callout">
                    <p>Log in with your Github account.</p>
                    <button onClick={this._onLogin.bind(this)} className="button expanded">Log in with Github</button>
                </div>
            </div>
        );
    }
}

export default Redux.connect()(LogOn);