import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
  setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
    temperature: response.data.main.temp,
    feelsLike: response.data.main.feels_like,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
  })
}

function search() {
  const apiKey = "1ee4264117b73d2263eecd562f31ef5c";
  let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

if (weatherData.ready) {
  return (
  <div className="Weather">
    <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-9" >    
      <input type="search" placeholder="Enter a city..." className="form-control no-border" autoFocus="on" onChange={handleCityChange}/>
      </div> 
      <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-warning w-100"
              />
            </div>
      </div>
    </form>
    <WeatherInfo data={weatherData}/>
    <WeatherForecast coordinates={weatherData.coordinates} />
  </div>
  )
} else {
  search();
  return "Loading weather...";
} 
} 