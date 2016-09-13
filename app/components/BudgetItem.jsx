var React = require('react');

var BudgetItem = React.createClass({
	clickHandler: function(amount) {
		console.log(amount);
	},

  render: function () {
    var {description, amount} = this.props;
    return (
        <tr>
          <td>{description}</td>
          <td className="amount" onClick={this.clickHandler}>${amount}</td>
        </tr>
    )
  }
});

module.exports = BudgetItem;
