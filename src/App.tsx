import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewRouter from "./router/index";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { customHistory } from "@/uitls/history";

function App() {
  return (
    <div className="App">
      <Router history={customHistory}>
        <ViewRouter />
      </Router>
    </div>
  );
}

export default App;
