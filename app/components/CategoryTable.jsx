var React = require('react');
import BudgetItem from 'BudgetItem';

var CategoryTable = React.createClass({
  render: function () {
    var {category} = this.props;
    var {all_expenses, all_expenses_total} = this.props
    var renderItem = () => {
			for (var i=0; i < all_expenses.length; i++) {
				return all_expenses.map((item) => {
					return (
						<BudgetItem key={item.id} {...item}/>
					);
				});
			}
    };
    
    
    return (
      <div>
        <table className="expense-table">
          <thead>
            <tr>
              <th className="table-header" colSpan="2">{category}</th>
            </tr>
          </thead>
          <tbody>
              {renderItem()}
              <tr>
                <td className="totals-column">Total</td>
                <td className="amount">${all_expenses_total}</td>
              </tr>
          </tbody>

        </table>
      </div>

    )
  }
});

module.exports = CategoryTable;
