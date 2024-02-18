import React from"react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">

    <div className="container">
    <Weather defaultCity="Leeds" />
    <footer>
    This project was coded by{" "}
          <a
            href="https://github.com/mia-chou?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Fang-Yi Chou</strong>
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mia-chou/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>open-sourced on GitHub</strong>
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-clima-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>hosted on Netlify</strong>
          </a>

    </footer>
    </div>
  
    </div>




  );
}

export default App;
