/**
 * @jsx React.DOM
 */
var React        = require('react')
var ReactDOM     = require('react-dom')
var Registration = require('./components/Registration')

  ReactDOM.render(
    <Registration />,
    document.getElementById('registration-form')
  )
