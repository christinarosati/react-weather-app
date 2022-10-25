import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="AppContainer">
      <div className="App">
        <div className="container">
          <Weather defaultCity="Montreal" />
        </div>
      </div>
      <small>
        <a
          href="https://github.com/christinarosati/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Christina Rosati
      </small>
    </div>
  );
}
