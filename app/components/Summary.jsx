var React = require('react');
import Income from  'Income';
import Expenses from 'Expenses';

var Summary = React.createClass({
  render: function () {
    
    return (
      <div>
        <Income />
        <Expenses />
      </div>
    )
  }
});

module.exports = Summary;
