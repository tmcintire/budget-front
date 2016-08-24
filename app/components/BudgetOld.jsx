import React from 'react';
import getBudget from 'budgetAPI';
import BudgetItem from 'BudgetItem';

var Budget = React.createClass({
	getInitialState() {
	    return {
	    	data: [],
	    	isLoading: false    
        }	
	},
	getNames: function() {
		var that = this;
		getBudget.getBudget().then(function(data) {
			that.setState({
				data: data
			});
		});

	},
	render: function() {
		var {data} = this.state;
		var renderItems = () => {
      return data.map((item) => {
        return (
          <BudgetItem key={item.id} {...item}/>
        );
      });
    };
		return(
			<div>
				<div>
					<button className="button" onClick={this.getNames}>Get Names</button>
				</div>
					{renderItems()}
			</div>
			
		);
	}
});

module.exports = Budget;

