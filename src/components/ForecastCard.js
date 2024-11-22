import React from 'react';

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div style={forecastStyle}>
      {forecast.list.slice(0, 5).map((item, index) => (
        <div key={index} style={forecastItemStyle}>
          <p style={timeStyle}>{formatTime(item.dt_txt)}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
            style={iconStyle}
          />
          <h3 style={tempStyle}>{Math.round(item.main.temp)}°C</h3>
          <p style={descriptionStyle}>{item.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

const forecastStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
};

const forecastItemStyle = {
  backgroundColor: '#e0f7fa', 
  borderRadius: '10px',
  textAlign: 'center',
  padding: '1rem',
  width: '150px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const timeStyle = {
  fontSize: '1rem',
  color: '#0077b6', 
  fontWeight: 'bold',
};

const iconStyle = {
  width: '50px',
  height: '50px',
};

const tempStyle = {
  fontSize: '1.5rem',
  color: '#005f73', 
  margin: '0.5rem 0',
};

const descriptionStyle = {
  fontSize: '0.9rem',
  color: '#0096c7', 
};

export default ForecastCard;
