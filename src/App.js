import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://github.com/steph-sketch850">Stephanie Rodriguez</a>{" "}
          and is{" "}
          <a href="https://github.com/steph-sketch850/react-weather-pj">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://first-react-pj.netlify.app/">hosted on Netlify</a>
        </footer>
      </div>
    </div>
  );
}
