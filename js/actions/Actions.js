var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var Actions = {

  createRow: function() {
    AppDispatcher.dispatch({
      actionType: Constants.CREATE
    });
  },

  updateCell: function(id, column, data) {
    AppDispatcher.dispatch({
      actionType: Constants.UPDATE,
      id: id,
      column: column,
      data: data
    });
  },

  deleteRow: function(id) {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE,
      id: id
    });
  },

  deleteAll: function() {
    AppDispatcher.dispatch({
      actionType: Constants.DELETE_ALL
    });
  }

};

module.exports = Actions;
