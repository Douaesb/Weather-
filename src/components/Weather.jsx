import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [forecastData, setForecastData] = useState(null);

  const apiKey = 'd729d96edb9e556d76e2882528624d82'; 

  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, []); 

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchForecast = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      setForecastData(response.data);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
    fetchForecast();
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="Enter city name" />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
      {forecastData && (
        <div>
          <h2>Short-Term Forecast</h2>
          <ul>
            {forecastData.list.slice(0, 3).map((forecastEntry, index) => (
              <li key={index}>
                {forecastEntry.dt_txt}: {forecastEntry.weather[0].description}, Temp: {forecastEntry.main.temp}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Weather;
