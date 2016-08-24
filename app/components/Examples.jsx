var React = require('react');

var Examples = React.createClass({
	getInitialState() {
	    return {
	    	isSelected: false
        }	
	},
	selectItem: function() {
		this.setState({
			isSelected: true
		});

	},
	deselectItem: function() {
		this.setState({
			isSelected: false
		});

	},
  
	render: function () {
		var renderItem = () => {
				if(this.state.isSelected === true) {
					return (
						<input type="text" size="20" placeholder="text" onBlur={this.deselectItem}/>
					)
				} else {
					return (
					<p onClick={this.selectItem}>Test text </p>
					)
				}
		};
    return (
        <div>
					{renderItem()}
				</div>
    )
  }
});

module.exports = Examples;
