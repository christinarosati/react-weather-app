import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-4">
          <h1>Montreal</h1>
          <ul className="current-time">
            <li>Last updated: Tuesday, 12:10</li>
          </ul>
        </div>
        <div className="col-4">
          <button className="current-location-button">Current Location</button>
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
              <span className="current-temp">20</span>
              <span className="units">°C</span>
            </li>
            <li className="description">Sunny</li>
            <li>
              <img
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Sunny"
              />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="additional-details">
            <li>
              <strong>Wind:</strong> 10 km/h
            </li>
            <li>
              <strong>Humidity:</strong> 50%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
