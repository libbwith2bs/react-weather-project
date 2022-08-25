import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-weekday">Thursday</div>
          <div>
            <img
              className="WeatherForecast-icon"
              src={props.data.icon}
              alt={props.data.description}
            />
          </div>
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-max"> 80 </span>|
            <span className="WeatherForecast-min"> 60</span>
          </div>
        </div>
      </div>
    </div>
  );
}
