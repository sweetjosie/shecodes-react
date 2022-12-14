import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReactAnimatedWeather from "react-animated-weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Weather App with React</h1>

    <App />
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={100}
      animate={true}
    />
    <p>
      open-source code by{" "}
      <a href="https://github.com/sweetjosie/shecodes-react">Josie Maia</a>
    </p>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
