import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul className="current-time">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <button className="current-location-button">Current Location</button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="current-temperature">
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li className="description">{props.data.description}</li>
            <li>
              <img src={props.data.iconUrl} alt={props.data.description} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="additional-details">
            <li>
              <strong>Wind:</strong> {Math.round(props.data.wind * 3.6)} km/h
            </li>
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
