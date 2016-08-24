var React = require('react');
import getIncome from 'budgetAPI';
import IncomeItem from 'IncomeItem';

var Income = React.createClass({
  getInitialState() {
	    return {
	    	data: [],
        }	
	},
  componentDidMount: function() {
      var that = this;
      getIncome.getIncome().then(function(data) {
        that.setState({
          data: data
        });
        
      });
    },
  render: function () {
    var {data} = this.state;
    var renderIncome = () => {
				return data.map((income) => {
					return (
						  	<IncomeItem key={income.id} {...income}/>
					);
				});
    };
    return (
        <div>
          <table>
            <tbody>
              {renderIncome()}
            </tbody>
          </table>

        </div>
    )
  }
});

module.exports = Income;
