/**
 * @jsx React.DOM
 */
var React        = require('react')
var Personal     = require('./personal')
var Confirmation = require('./confirmation')
var Survey       = require('./survey')
var assign       = require('object-assign')

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var data = window.data = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

var Registration = React.createClass({

  getInitialState: function() {
    return {
      step : 1
    }
  },

  saveData: function(field_data) {
    return function() {
      data = assign({}, data, field_data)

      return this
    }.bind(this)()
  },

  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })

    return this
  },

  previousStep: function() {
    this.setState({
      step : this.state.step - 1
    })

    return this
  },

  submitRegistration: function() {
    alert('Ajax submit registration would happen here')

    this.setState({
      step : this.state.step + 1
    })
  },

  render: function() {
    var style = {
      width : (this.state.step / 4 * 100) + '%'
    }

    return (
      <main>
        <span className="progress-step">Step {this.state.step}</span>
        <div className="progress-bar">
          <div className="progress-fuel" style={style}></div>
        </div>
        {this.state.step === 1 &&
          <Personal saveData={this.saveData}
                    previousStep={this.previousStep}
                    fieldValues={data} />
        }
        {this.state.step === 2 &&
          <Survey saveData={this.saveData}
                  previousStep={this.previousStep}
                  fieldValues={data} />
        }
        {this.state.step === 3 &&
          <Confirmation submitRegistration={this.submitRegistration}
                        previousStep={this.previousStep}
                        fieldValues={data} />
        }
        {this.state.step === 4 &&
          <div>
            <h2>Successfully Registered!</h2>
            <p>Please check your email <b>{data.email}</b> for a confirmation link to activate your account.</p>
          </div>
        }
      </main>
    )
  }

})

module.exports = Registration