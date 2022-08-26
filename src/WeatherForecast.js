import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

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
            <ForecastDay data={forecast[0]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[4]} />
          </div>
          <div className="col-2">
            <ForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "dff86e5088e22e74d9afbdbb6438d4bd";

    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
