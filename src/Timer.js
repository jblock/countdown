import React from 'react'
// import moment from 'moment'

const max = (number) => Math.max(parseInt(number, 10), 0)
const format = (number) => number < 10 ? `0${number}` : number 

export default class Timer extends React.Component {
  render() {
    return (
      <div>
        <span className="Timer-number">{format(max(this.props.hours))}</span>
        :
        <span className="Timer-number">{format(max(this.props.minutes))}</span>
        :
        <span className="Timer-number">{format(max(this.props.seconds))}</span>
      </div>
    )
  }
}