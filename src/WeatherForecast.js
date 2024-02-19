import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(){
    let apiKey="03ob1b49a93e50d82f3dta0c9ad62afc";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    
    axios.get(apiUrl).then(handleResponse);
    
    
    return(
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
        <div className="WeatherForacast-day">Tu</div>  
        <WeatherIcon code ="0id" sixe={36}/>
        <div className="WeatherForecast-temperatures">
        <span className =" WeatherForecast-temperatures-max">11°C
        </span>
        <span className =" WeatherForecast-temperatures-min">6°C
        </span>
        </div>
        </div>
        </div>
        </div>
    );
}