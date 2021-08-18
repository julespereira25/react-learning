import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Button1 from "./screen/stopwatch";
import Button from "./screen/timer";


ReactDOM.render(<App />, document.getElementById("root"));

// class Clock extends React.Component {
//   constructor() {
//     super();
//     this.state = { minute: 0, second: 0 };
//   }

//   componentDidMount() {
//     setInterval(() => {
//       return this.setState((state, props) => {
//         return {
//           second: state.second == 59 ? 0 : state.second + 1,
//           minute: state.second == 59 ? state.minute + 1 : state.minute,
//         };
//       });
//     }, 1000);
//   }

//   render() {
//     return (
//       <h1>
//         {this.state.minute}:{this.state.second}
//       </h1>
//     );
//   }
// }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {}

//   componentWillUnmount() {}

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ========================================

// ReactDOM.render(<Clock />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
