var React = require('react');
var RowsList = require('./RowsList.react');
var Store = require('../stores/Store');
var Actions = require('../actions/Actions');
/**
 * Retrieve the current table data from the Store
 */
function getTodoState() {
  return {
    data: Store.getData()
  };
}

var Table = React.createClass({

  getInitialState: function() {
    return getTodoState();
  },

  componentDidMount: function() {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    Store.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className = "table-responsive">
        <table className = "table table-striped mytable">
          <span className = "table-add glyphicon glyphicon-plus" onClick={this._onCreateClick}></span>
          <thead>
            <tr>
              <th><span className = "glyphicon glyphicon-trash" onClick={this._onDeleteAllClick}></span></th>
              <th> First </th>
              <th> Second </th>
              <th> Third </th>
            </tr>
          </thead>
          < RowsList data = {this.state.data} />
        </table>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the Store
   */
  _onChange: function() {
    this.setState(getTodoState());
  },

  _onCreateClick: function() {
    Actions.createRow();
  },

  _onDeleteAllClick: function() {
    Actions.deleteAll();
  }

});

module.exports = Table;
