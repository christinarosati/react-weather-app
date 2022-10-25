import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { RotatingLines } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
      date: "Tuesday, 1:58",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-4">
            <h1>{weatherData.city}</h1>
            <ul className="current-time">
              <li>Last updated: {weatherData.date}</li>
            </ul>
          </div>
          <div className="col-4">
            <button className="current-location-button">
              Current Location
            </button>
          </div>
          <div className="col-4">
            <form>
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                id="search-city-form-input"
              />
              <input type="submit" value="Go" className="form-control" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul className="current-temperature">
              <li>
                <span className="current-temp">{weatherData.temperature}</span>
                <span className="units">°C</span>
              </li>
              <li className="description">{weatherData.description}</li>
              <li>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="additional-details">
              <li>
                <strong>Wind:</strong> {weatherData.wind} km/h
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity}%
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "26084fo2fac06a1093710e4da1a8b28t";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <RotatingLines
        strokeColor="#090089"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    );
  }
}
