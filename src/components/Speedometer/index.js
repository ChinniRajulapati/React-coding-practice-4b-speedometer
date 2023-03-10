/* eslint-disable react/button-has-type */
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1 className="paragraph">Speed is {speed}mph</h1>
        <p className="speed-paragraph">
          "Min Limit is 0mph, Max Limit is 200mph"
        </p>
        <div>
          <button onClick={this.onAccelerate} className="button1">
            Accelerate
          </button>
          <button onClick={this.onBrakes} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
