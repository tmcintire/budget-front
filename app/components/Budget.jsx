import React from 'react';
import getBudget from 'budgetAPI';
import BudgetItem from 'BudgetItem';
import CategoryTable from 'CategoryTable';
import Summary from 'Summary';

var Budget = React.createClass({
	getInitialState() {
	    return {
	    	data: [],
	    	isLoading: false    
        }	
	},
	componentDidMount: function() {
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
			for (var i=0; i < data.length; i++) {
				return data.map((category) => {
					return (
							<CategoryTable key={category.id} {...category}/>
					);
				});
			}
    };
		return(
			<div>
					<div className="expenses-table-div">
					{renderItems()}
					</div>
					<div className="summary-div">
						<Summary />
					</div>
			</div>
			
		);
	}
});

module.exports = Budget;

