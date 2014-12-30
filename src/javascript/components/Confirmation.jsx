/**
 * @jsx React.DOM
 */
var React = require('react')

var Confirmation = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Confirm Registration</h2>
        <ul>
          <li><b>Name:</b> {this.props.fieldData.name}</li>
          <li><b>Email:</b> {this.props.fieldData.email}</li>
          <li><b>Age:</b> {this.props.fieldData.age}</li>
          <li><b>Colors:</b> {this.props.fieldData.colors.join(', ')}</li>
        </ul>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Previous Step</button>
            <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
          </li>
        </ul>
      </div>
    )
  }
})

module.exports = Confirmation