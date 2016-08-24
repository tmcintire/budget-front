var React = require('react');

var Expenses = React.createClass({
  render: function () {
    
    return (
        <div>
          <table>
            <tbody>
              <tr>
                <td>Expenses</td>
                <td>$60,000</td>
              </tr>
              <tr>
                <td>Take Home</td>
                <td>$60,000</td>
              </tr>
              <tr>
                <td>What's Left</td>
                <td>$60,000</td>
              </tr>
            </tbody>
              
          </table>

        </div>
    )
  }
});

module.exports = Expenses;
