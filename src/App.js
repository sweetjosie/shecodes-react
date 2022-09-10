import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoad] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoad(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "2f7186f46a8461ec8b967033c17abe5b";
    let units = `imperial`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="weatherSearch" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Search"
        autoFocus={true}
        onChange={updateCity}
      />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Current weather in {city}</li>
          <li>Temperature: {Math.round(weather.temperature)}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
