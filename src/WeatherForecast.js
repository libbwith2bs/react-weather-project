import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "dff86e5088e22e74d9afbdbb6438d4bd";
  let lon = props.data.coord.lon;
  let lat = props.data.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
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
