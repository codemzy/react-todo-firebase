var React = require('react');
var Redux = require('react-redux');

// api
var api =  require('./../firebase/api.js');

export class LogOut extends React.Component {
    
    _onLogout() {
        var {dispatch} = this.props;
        dispatch(api.startLogout());
    }
    
    render() {
        return (
            <div>
                <img className="float-center" src="/img/todotiger.png" alt="todo tiger" />
                <h1 className="text-center page-title">Log Out</h1>
                <br />
                <div className="text-center callout account-callout">
                    <p>Finished off your list? You can log out of your account below.</p>
                    <button onClick={this._onLogout.bind(this)} className="button expanded">Log Out</button>
                </div>
            </div>
        );
    }
}

export default Redux.connect()(LogOut);