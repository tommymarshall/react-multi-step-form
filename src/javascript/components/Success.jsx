/**
 * @jsx React.DOM
 */
var React = require('react')

var Success = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Successfully Registered!</h2>
        <p>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</p>
      </div>
    )
  }
})

module.exports = Success