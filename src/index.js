import React from "react";
import ReactDOM from "react-dom";
import CurrencyConverter from "./currencyConveter";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
