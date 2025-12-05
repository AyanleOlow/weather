import React, { useState } from "react";
import axios from "axios";
import './App.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "d872ce1b3e4339aa85569fdf82ab4066";

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    
    <div className="screen" style={{ textAlign: "center", marginTop: "50px" }}>
      
      <h1>Weather App</h1>
      <div className="box"> 
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Search</button>
      </div>
      {weather && (
        <div className="weatherContainer">
          <h2 className="TITTLE">{weather.name}</h2>
           <img
    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
    alt={weather.weather[0].description}
  />
          <p className="Temperature"> Temperature: {weather.main.temp}°C</p>
          <p className="Weather">Weather: {weather.weather[0].description}</p>
          <p className="Temperature">humidity: {weather.main.humidity}%</p>
          
          <p>Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
<p>Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>

          
        </div>
      )}
    </div>
  );
};

export default Weather;
