var React = require('react');
var ReactPropTypes = React.PropTypes;
var Actions = require('../actions/Actions');
var Cell = React.createClass({

    getInitialState: function () {
        return {
            data: ""
        };
    },
    componentWillMount: function () {
        this.setState({
            data: this.props.data
        });
    },
    handleEditCell: function (evt) {
    },
    handleKeyDown: function (evt) {
        switch (evt.keyCode) {
            case 13: // Enter
            case 9: // Tab
                evt.target.blur();
                break;
        }
    },
    save : function() {
      Actions.updateCell(this.props.id, this.props.column, this.state.data);
    },

    handleChange: function (evt) {
        this.setState({data: evt.target.value});
    },

    render: function () {
        return(<td><input type='text' value={this.state.data} onChange={this.handleChange} onKeyDown={this.handleKeyDown} onBlur={this.save} /></td>);
    }
});
module.exports = Cell;
