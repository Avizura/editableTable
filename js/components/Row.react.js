var React = require('react');
var Cell = require('./Cell.react');
var Actions = require('../actions/Actions');
var ReactPropTypes = React.PropTypes;
var Row = React.createClass({
  propTypes: {
    data: ReactPropTypes.object
  },

  _onDestroyClick: function() {
    Actions.deleteRow(this.props.data.id);
  },

  render: function(){
    console.log(this.props.data);
    return (
      <tr>
        <td><input type="checkbox" onClick={this._onDestroyClick} /></td>
        <Cell data={this.props.data.first} id = {this.props.data.id} column = "first" />
        <Cell data={this.props.data.second} id = {this.props.data.id} column = "second" />
        <Cell data={this.props.data.third} id = {this.props.data.id} column = "third" />
      </tr>
    );
  }
});
module.exports = Row;
