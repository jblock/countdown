import React, { Component } from "react";
import Timer from "./Timer";
import TimerHOC from "./TimerHOC";
import moment from "moment";
import Confetti from "react-confetti";
import "./App.css";

const ET = TimerHOC(Timer);
console.log(TimerHOC);

class App extends Component {
  constructor(p, c) {
    super(p, c);

    this.state = {
      time: moment().add(1, "hour").add(1, "minute"),
      on: true,
      victory: false
    };
  }
  onKeyup = evt => {
    switch (evt.key) {
      case "Enter":
        this.setState({
          victory: true,
          on: false
        });
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        this.setState({
          victory: false,
          on: true,
          time: moment().add(parseInt(evt.key, 10) * 10 + 1, "minutes")
        });
        break;
      case "7":
        this.setState({
          victory: false,
          on: true,
          time: moment().add(7.5, "minutes")
        });
        break;
      case "y":
        this.setState({
          victory: false,
          on: true
        });
        break;
      case "n":
        this.setState({
          on: false
        });
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    window.addEventListener("keyup", this.onKeyup);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.onKeyup);
  }
  render() {
    return (
      <div className="App">
        <ET
          className={`${this.state.victory ? "is-victory" : ""}`}
          on={this.state.on}
          victory={this.state.victory}
          end={this.state.time}
        >
          {this.state.victory && <Confetti />}
        </ET>
      </div>
    );
  }
}

export default App;
