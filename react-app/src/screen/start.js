import React from "react";
import logo from "../logo.svg";
import Button from "../components/Button";

function Start() {
  return (
    <div className="start">
      <Button text="Stopwatch" url="/stopwatch" />
      <Button text="Timer" url="/timer" />
    </div>
  );
}

export default Start;
