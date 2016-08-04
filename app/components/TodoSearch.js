var React = require('react');
var {connect} = require('react-redux');
var actions =  require('./../actions/actions.js');

export class TodoSearch extends React.Component {
    
    _handleSearch() {
        var searchText = this.refs.searchText.value;
        this.props.dispatch(actions.setSearchText(searchText));
    }
    
    _handleToggle() {
        this.props.dispatch(actions.toggleShowCompleted());
    }
    
    render() {
        return (
            <div className="todowrap__header">
                <div className="row">
                    <div className="small-9 columns">
                        <input type="search" className="todo-search-input" placeholder="Search..." ref="searchText" onChange={this._handleSearch.bind(this)} />
                    </div>
                    <div className="small-3 columns text-right">
                        <label className="my-switch">
                          <input type="checkbox" ref="showCompleted" onChange={this._handleToggle.bind(this)} />
                          <div className="my-slider"></div>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        showCompleted: state.showCompleted,
        searchText: state.searchText
    };
})(TodoSearch);