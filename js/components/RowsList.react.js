var React = require('react');
var Row = require('./Row.react');
var RowsList = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
   render: function() {
     var rows = this.state.data.map(function (row) {
       return <Row
        key = {row.id}
        data = {row} />;
    });
    return (
      <tbody>{rows}</tbody>
    );
   }
});
module.exports = RowsList;
