import { useState } from "react";
import "./App.css";
import ViewRouter from "./router/index";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { customHistory } from "@/router/history";
function App() {
  return (
    <div className="App center">
        <Router history={customHistory}>
          <ViewRouter />
        </Router>
    </div>
  );
}

export default App;
