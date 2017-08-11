import React from 'react'
import moment from 'moment'

const TimerHOC = (Component) => {
  return class TimerHOCInner extends React.Component {
    create() {
      if (this.timer) return
      this.timer = setInterval(() => {
        this.forceUpdate()
      }, 1000)
    }
    destroy() {
      if (!this.timer) return
      clearInterval(this.timer)
      delete this.timer
    }
    componentDidMount() {
      this.create()
    }
    componentWillUnmount() {
      this.destroy()
    }
    componentDidUpdate() {
      if (this.props.on) {
        this.create()
      } else {
        this.destroy()
      }
    }
    render(){
      const {end} = this.props
      if (!end) return <Component {...this.props} />

      const now = moment()
      const diff = moment.duration(end.diff(now)).asSeconds()
      
      const hours = (diff / 60 / 60) % 24
      const minutes = (diff / 60) % 60
      const seconds = (diff) % 60

      return (
        <Component {...this.props} diff={diff} hours={hours} minutes={minutes} seconds={seconds} />
      )
    }
  }
}

export default TimerHOC