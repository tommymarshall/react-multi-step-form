/**
 * @jsx React.DOM
 */
var React        = require('react')
var Registration = require('./components/registration')

window.onload = function() {
  React.render(
    <Registration />,
    document.getElementById('registration-form')
  )
}