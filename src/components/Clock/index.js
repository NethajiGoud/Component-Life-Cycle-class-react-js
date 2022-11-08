import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor Called')
  }

  componentDidMount = () => {
    console.log('componentDidMount Called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount Called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log('render Called', date)
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {date.toLocaleTimeString()} </p>
      </div>
    )
  }
}
export default Clock
