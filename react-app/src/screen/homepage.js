import React from "react";
import logo from "../logo.svg";
import Button from "../components/button/button";
import Stopwatch from "./stopwatch/stopwatch";
import { Link } from "react-router-dom";
import "./homepage.scss";

function Home() {
  return (
    <div class="home">
      <Link to="/stopwatch">
        <Button className="homeStopwatch" text="Stopwatch" />
      </Link>
      <Link to="/timer">
        <Button className="homeTimer" text="Timer" />
      </Link>
    </div>
  );
}

export default Home;
