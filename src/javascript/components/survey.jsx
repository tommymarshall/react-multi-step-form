/**
 * @jsx React.DOM
 */
var React = require('react')

var Survey = React.createClass({

  getDefaultProps: function() {
    return {
      age    : null,
      colors : [],
    };
  },

  getValue: function(el) {
    var values = []

    if (!el) return null

    if (typeof el.length == 'undefined') return el.checked ? el.value : null

    for (var i = 0; i < el.length; i++) {
      el[i].checked && values.push(el[i].value)
    }

    return values
  },

  renderOptions: function(type, name, value) {
    return (
      <label>
        <input type={type} name={name} value={value} /> {value}
      </label>
    )
  },

  render: function() {
    return (
      <div>
        <h2>Survey Question</h2>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {['18-26', '27-38', '39-50', '51-62'].map(this.renderOptions.bind(this, 'radio', 'age'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Colors</span>
            {['Blue', 'Red', 'Orange', 'Green'].map(this.renderOptions.bind(this, 'checkbox', 'colors'))}
          </li>
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Previous Step</button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Next Step</button>
          </li>
        </ul>
      </div>
    )
  },

  nextStep: function(e) {
    e.preventDefault()

    var age    = document.querySelector('input[name="age"]:checked')
    var colors = document.querySelectorAll('input[name="colors"]')

    var data = {
      age    : this.getValue(age),
      colors : this.getValue(colors)
    }

    console.log('data', data)

    this.props.saveData(data).nextStep()
  }

})

module.exports = Survey