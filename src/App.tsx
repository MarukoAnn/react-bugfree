import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ViewRouter from "./router/index";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { customHistory } from "@/uitls/history";
import { Provider } from 'mobx-react'
import store from '@/store/index'
function App() {
  return (
    <div className="App">
      <Provider { ...store }>  
        <Router history={customHistory}>
          <ViewRouter />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
