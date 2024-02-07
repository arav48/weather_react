import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import WeatherCard from './WeatherCard';
import LocationSelector from './LocationSelector';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const apiKey = '0d592b6c0ed379aad884e6060d1fe292';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
      
      const response = await fetch(apiUrl);
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  return (
    <div className="weather-app-container">
      <h1>Real-Time Weather App</h1>
      <LocationSelector setLocation={setLocation} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherApp;
