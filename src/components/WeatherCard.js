import React from 'react';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const weatherIcon = weatherDetails[0]?.icon; 
  const weatherDescription = weatherDetails[0]?.description;
  const condition = weatherDetails[0].main;


  // Dynamic message based on weather condition
  const getWeatherMessage = (condition) => {
    if (condition.toLowerCase().includes('rain')) {
      return 'Grab an umbrella!';
    }
    if (condition.toLowerCase().includes('cloud')) {
      return 'It might be a gloomy day!';
    }
    if (condition.toLowerCase().includes('clear')) {
      return 'Enjoy the sunshine!';
    }
    if (condition.toLowerCase().includes('snow')) {
      return 'Time for some snow fun!';
    }
    return 'Have a great day!';
  };

  return (
    <div style={weatherCardStyle}>
      <h2 style={cityNameStyle}>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
        alt={weatherDescription}
        style={iconStyle}
      />
      <h3 style={tempStyle}>{Math.round(main.temp)}°C</h3>
      <p style={descriptionStyle}>{weatherDescription}</p>
      <p style={detailsStyle}>
        Feels like: {Math.round(main.feels_like)}°C | Humidity: {main.humidity}%
      </p>
      <p style={messageStyle}>{getWeatherMessage(condition)}</p>
    </div>
  );
};

const weatherCardStyle = {
  backgroundColor: '#e0f7fa', 
  borderRadius: '15px',
  textAlign: 'center',
  padding: '1.5rem',
  width: '300px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
  margin: '1rem auto',
};

const cityNameStyle = {
  fontSize: '1.8rem',
  color: '#005f73',
  fontWeight: 'bold',
  margin: '0.5rem 0',
};

const iconStyle = {
  width: '120px',
  height: '120px',
};

const tempStyle = {
  fontSize: '2rem',
  color: '#0077b6',
  margin: '0.5rem 0',
};

const descriptionStyle = {
  fontSize: '1rem',
  color: '#0096c7',
  textTransform: 'capitalize', 
  margin: '0.3rem 0',
};

const detailsStyle = {
  fontSize: '0.9rem',
  color: '#005f73',
  margin: '0.3rem 0',
};

const messageStyle = {
  fontSize: '1.4rem',
  fontWeight: 'bold',
  marginTop: '20px',
  color: '#0077b6',
};

export default WeatherCard;
