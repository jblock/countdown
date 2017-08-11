import React, { Component } from 'react';
import Timer from './Timer';
import TimerHOC from './TimerHOC'
import moment from 'moment'
import './App.css';

const ET = TimerHOC(Timer)
console.log(TimerHOC)

class App extends Component {
  constructor(p, c) {
    super(p, c)
    
    this.state = {
      time: moment().add(1, 'hour')
    }
  }
  componentDidMount() {
    window.addEventListener('keyup', (evt) => {
      console.log(evt)
    })
  }
  render() {
    return (
      <div className="App">
        <ET end={this.state.time} />
      </div>
    );
  }
}

export default App;
