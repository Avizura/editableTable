var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/Constants');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var rows = [{
  "id": 0,
  "first": "Art of Procrastination",
  "second": "Hey",
  "third": "1941"
}, {
  "id": 1,
  "first": "Avizura",
  "second": "Dementia",
  "third": "The Shawshank Redemption"
}, {
  "id": 2,
  "first": "Arteezy",
  "second": "Wakawakawaka",
  "third": "1995"
}];

function createRow() {
  var id = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
  rows[rows.length] = {
    id: id,
    first: 'undefined',
    second: 'undefined',
    third: 'undefined'
  };
};

function update(id, column, update) {
  console.log('UPDATE!');
  rows[id][column] = update;
}

function deleteRow(id) {
  var index = _.findIndex(rows, function(chr) {
    return chr.id == id;
  });
  rows.splice(index, 1);
}

function deleteAllRows() {
  rows.splice(0, rows.length);
}

var Store = assign({}, EventEmitter.prototype, {

  getData: function() {
    return rows;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch (action.actionType) {
    case Constants.CREATE:
      createRow();
      Store.emitChange();
      break;

    case Constants.UPDATE:
      update(action.id, action.column, action.data);
      Store.emitChange();
      break;

    case Constants.DELETE:
      deleteRow(action.id);
      Store.emitChange();
      break;

    case Constants.DELETE_ALL:
      deleteAllRows();
      Store.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = Store;
