import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {

        setForecast(response.data.daily);
        setLoaded(true);

    }

    if (!loaded) {

        let apiKey = "1ee4264117b73d2263eecd562f31ef5c";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


        axios.get(apiUrl).then(handleResponse);


        return null;
    } else {

        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForacast-day">Tu</div>
                        <WeatherIcon code = {forecast[0].weather[0].icon}sixe={36} />
                        <div className="WeatherForecast-temperatures">
                            <span className=" WeatherForecast-temperatures-max">
                                {Math.round(forecast[0].temp.max)}°</span>
                            <span className=" WeatherForecast-temperatures-min">
                            {Math.round(forecast[0].temp.min)}°</span>
                
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}