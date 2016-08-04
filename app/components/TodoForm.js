var React = require('react');
var {connect} = require('react-redux');
var actions =  require('./../actions/actions.js');

export class TodoForm extends React.Component {
    
    _onSubmitAdd(e) {
       e.preventDefault();
       var text = this.refs.text.value;
       if (text.length > 0) {
           this.props.dispatch(actions.addTodo(text));
           this.refs.text.value = "";
       } else {
           this.refs.text.focus();
       }
    }
    
    render() {
        return (
            <div className="todowrap__footer">
                <form ref="form" onSubmit={this._onSubmitAdd.bind(this)}>
                    <input type="text" className="todo-form-input" placeholder="What would you like to do?" ref="text" />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        );
    }
}

export default connect()(TodoForm);