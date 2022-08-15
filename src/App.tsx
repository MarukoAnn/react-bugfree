import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "antd"

function App() {
  const btnClick = (number: number): void  => {
    console.log('测试', number);
  }
  return (
    <div className="App">
      <Button type="primary" onClick={btnClick.bind(null, 123)}>Antd</Button>
    </div>
  );
}

export default App;
