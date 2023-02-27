import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyButton from "./components/Counter";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter style={{ border: "1px solid" }} />
      <Counter />
    </div>
  );
}

export default App;
