import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
              <span className="WeatherForecast-max">
                {" "}
                {Math.round(forecast[0].temp.max)}°{" "}
              </span>
              |
              <span className="WeatherForecast-min">
                {" "}
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dff86e5088e22e74d9afbdbb6438d4bd";
    let lon = props.data.coord.lon;
    let lat = props.data.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
