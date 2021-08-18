import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

function Stopwatch() {
  let hours = 0;
  let minutes = 0;
  let [seconds, setSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  let clearTimer;

  
  const startTimer = () => {
    setIsTimerActive(true);
    clearTimer = setInterval(() => {
      setSeconds(seconds++);
    }, 1000);
  };

  function stopTimer() {
    clearInterval(clearTimer);
    setIsTimerActive(false);
  }

  return (
    <div className="Stopwatch">
      <h1>Stopwatch</h1>
      <p>{`${hours}:${minutes}:${seconds}`}</p>
      {!isTimerActive && <button onClick={startTimer}>start</button>}
      <button onClick={stopTimer}>stop</button>
    </div>
  );
}

export default Stopwatch;
