import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(){
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div>
          <div className="WeatherForecast-day">{day()}</div>
          <WeatherIcon code={props.data.weather[0].icon} size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </div>
        </div>
      );
    }