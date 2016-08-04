var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions =  require('./../actions/actions.js');

export class Todo extends React.Component {
    render() {
        var todoClass = "todo";
        var checkClass = "fa fa-square fa-lg";
        if (this.props.completed) {
            todoClass = "todo todo-completed";
            var checkClass = "fa fa-check-square fa-lg";
        }
        var renderDate = () => {
            var message = 'Created ';
            var timestamp = this.props.createdAt;
            if (this.props.completed) {
                message = 'Completed ';
                timestamp = this.props.completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClass} onClick={() => {
                // this.props.onToggle(this.props.id);
                this.props.dispatch(actions.toggleTodo(this.props.id));
            }}>
                <div className="row">
                    <div className="small-1 columns">
                        <i id="check-icon" className={checkClass} aria-hidden="true"></i>
                    </div>
                    <div className="small-11 columns">
                        <p className="todo-name">{this.props.text}</p>
                        <p>{renderDate()}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// put todos from redux state onto this component
// this is the default export - the export above is just for tests
export default connect()(Todo);
