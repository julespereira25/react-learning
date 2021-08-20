import React from "react";
// import logo from "../logo.svg";
import Button from "../../components/button/button";
import "./stopwatch.scss";

class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = { hours: 0, minute: 0, second: 0 };
  }

  componentDidMount() {
    setInterval(() => {
      return this.setState((state, props) => {
        return {
          second: state.second == 59 ? 0 : state.second + 1,
          minute: state.minute == 59 ? state.minute + 1 : state.minute,
          hours: state.hours == 59 ? state.hours + 1 : state.hours,
        };
      });
      //Update the state
    }, 1000);
  }

  render() {
    return (
      <div className="Stopwatch">
        <h1>Stopwatch</h1>
        {/* <p>{"00:00:00"}</p> */}
        <p>
          {this.state.hours}:{this.state.minute}:{this.state.second}
        </p>
        <Button text="Start" />
        <Button text="Stop" />
        <Button text="Reset" />
        <p>Timer elapsed:{"00:00:00"}</p>
      </div>
    );
  }
}

export default Stopwatch;
