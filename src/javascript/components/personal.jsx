/**
 * @jsx React.DOM
 */
var React = require('react')

var Personal = React.createClass({

  getDefaultProps: function() {
    return {
      name     : '',
      password : '',
      email    : ''
    };
  },

  render: function() {
    return (
      <div>
        <h2>Account Details</h2>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input type="text" ref="name" defaultValue={this.props.fieldValues.name} />
          </li>
          <li>
            <label>Password</label>
            <input type="password" ref="password" defaultValue={this.props.fieldValues.password} />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" defaultValue={this.props.fieldValues.email} />
          </li>
          <li className="form-footer">
            <button className="btn -primary pull-right" onClick={this.nextStep}>Next Step</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      password : this.refs.password.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
    }

    this.props.saveData(data).nextStep()
  }

})

module.exports = Personal