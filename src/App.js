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
            Fang-Yi Chou
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mia-chou/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-clima-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>

    </footer>
    </div>
  
    </div>




  );
}

export default App;
