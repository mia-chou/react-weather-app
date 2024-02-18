import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
  return (
  <div className="WeatherInfo">
<h1>{props.data.city}</h1>
<ul>
  <li>
    <FormattedDate date={props.data.date} />
      </li>
  <li className="text-capitalize">{props.data.description}</li>
</ul>
<div className="row mt-3">
  <div className="col-6">
    <div className="clearfix float-left">
    
    <div>
    <img src={props.data.iconUrl} alt={props.data.description} />
    </div>
    
    <div>
    <WeatherTemperature celsius={props.data.temperature} />
      </div>
      </div>
      </div>
      <div className="col-6">

      <ul>
      <li>Feels like: {Math.round(props.data.feelsLike)}°C </li>
      <li>Humidity: {Math.round(props.data.humidity)}%</li>
      <li>Wind: {Math.round(props.data.wind)} km/h</li>
    </ul>
  </div>
      </div>
    </div>
  );
}