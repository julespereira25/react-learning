import "./App.css";
import Button from "./components/Button";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Stopwatch from "./screen/stopwatch";
import Timer from "./screen/timer";
import Start from "./screen/start";

function App() {
  return (
    <Router>
      <a href="/">Home</a>
      <div>
        <Route path="/stopwatch" exact strict>
          <Stopwatch />
        </Route>

        <Route path="/timer" exact strict>
          <Timer />
        </Route>

        <Route path="/" exact strict>
          <Start />
        </Route>
      </div>
    </Router>
  );
}

export default App;
