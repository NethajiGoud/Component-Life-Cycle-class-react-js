import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor Called')
  }

  state = {showClock: false}

  componentDidMount = () => {
    console.log('componentDidMount Called')
  }

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {date} = this.state
    console.log('render Called', date)
    console.log(date)

    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
