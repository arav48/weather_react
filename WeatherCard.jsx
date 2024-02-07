import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, name } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weatherDescription}</p>
      <p>Temperature: {temperature} °C</p>
    </div>
  );
};

export default WeatherCard;
