import React from "react";

export default function WeatherIcon(props) {
  let iconUrl = `http://openweathermap.org/img/wn/${props.code}@2x.png`;
  let altText = `${props.alt}`;

  return <img src={iconUrl} alt={altText} />;
}
