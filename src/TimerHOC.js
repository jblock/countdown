import React from 'react'
import moment from 'moment'

const TimerHOC = (Component) => {
  return class TimerHOCInner extends React.Component {
    componentDidMount() {
      this.timer = setInterval(() => {
        this.forceUpdate()
      }, 1000)
    }
    componentWillUnmount() {
      clearInterval(this.timer)
    }
    render(){
      const {end} = this.props
      if (!end) return <Component {...this.props} />

      const now = moment()
      const diff = moment.duration(end.diff(now))
      const secs = diff.asSeconds()
      
      const hours = (secs / 60 / 60) % 24
      const minutes = (secs / 60) % 60
      const seconds = (secs) % 60

      return (
        <Component {...this.props} hours={hours} minutes={minutes} seconds={seconds} />
      )
    }
  }
}

export default TimerHOC