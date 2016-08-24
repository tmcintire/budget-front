var React = require('react');

var IncomeItem = React.createClass({
  render: function () {
    var {description, amount} = this.props;
    return (
        <tr>
          <td>{description}</td>
          <td className="amount">${amount}</td>
        </tr>
    )
  }
});

module.exports = IncomeItem;
