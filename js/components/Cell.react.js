var React = require('react');
var ReactPropTypes = React.PropTypes;
var Actions = require('../actions/Actions');
var Cell = React.createClass({

    getInitialState: function () {
        return {
            isEditMode: false,
            data: ""
        };
    },
    componentWillMount: function () {
        this.setState({
            isEditMode: this.props.isEditMode,
            data: this.props.data
        });
    },
    handleEditCell: function (evt) {
        this.setState({isEditMode: true});
    },
    handleKeyDown: function (evt) {
        switch (evt.keyCode) {
            case 13: // Enter
            case 9: // Tab
                evt.target.blur();
                Actions.updateCell(this.props.id, this.props.column, this.state.data);
                this.setState({isEditMode: false});
                break;
        }
    },
    save : function() {
      Actions.updateCell(this.props.id, this.props.column, this.state.data);
      this.setState({isEditMode: false});
    },

    handleChange: function (evt) {
        this.setState({data: evt.target.value});
    },

    render: function () {
        // var cellHtml;
        // if (this.state.isEditMode) {
        //     cellHtml = <input type='text' value={this.state.data}
        //         onKeyDown={this.handleKeyDown} onBlur={this.save} onChange={this.handleChange} autoFocus={true} />
        // }
        // else {
        //     cellHtml = <div onDoubleClick={this.handleEditCell}>{this.state.data}</div>
        // }
        // return (<td>{cellHtml}</td>);
        // return(<td contentEditable="true" onChange={this.handleChange} onKeyDown={this.handleKeyDown}>{this.state.data}</td>);
        return(<td><input type='text' value={this.state.data} onChange={this.handleChange} onKeyDown={this.handleKeyDown} onBlur={this.save} /></td>);
    }
});
module.exports = Cell;
