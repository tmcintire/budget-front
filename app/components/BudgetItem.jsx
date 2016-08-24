var React = require('react');

var BudgetItem = React.createClass({
  render: function () {
    var {description, amount} = this.props;
    console.log(this.props);
    return (
        <tr>
          <td>{description}</td>
          <td className="amount">${amount}</td>
        </tr>
    )
  }
});

module.exports = BudgetItem;
