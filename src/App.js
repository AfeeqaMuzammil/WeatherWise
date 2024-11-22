import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get dynamic background style based on weather condition
  const getBackgroundStyle = (weather) => {
    if (!weather) {
      return {
        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
      };
    }

    const main = weather.weather[0].main.toLowerCase();

    if (main.includes('cloud')) {
      return {
        background: 'linear-gradient(to right, #d7d2cc, #304352)',
      };
    }
    if (main.includes('rain')) {
      return {
        background: 'linear-gradient(to right, #000428, #004e92)',
      };
    }
    return {
      background: 'linear-gradient(to right, #c6d7e0, #ffffff)',

    };
  };

  // Fetch weather and forecast data
  const fetchWeather = async (city) => {
    setIsLoading(true);
    const API_KEY = 'd5684bbca81f836d1291b0f0b0c12cc0'; 
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const FORECAST_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(WEATHER_URL),
        axios.get(FORECAST_URL),
      ]);
      setWeather(weatherResponse.data);
      setForecast(forecastResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('City not found!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ ...appStyle, ...getBackgroundStyle(weather) }}>
      <Header />
      <SearchBar onSearch={fetchWeather} />
      {isLoading ? (
        <div style={spinnerStyle}>Loading...</div>
      ) : (
        <>
          <WeatherCard weather={weather} />
          <ForecastCard forecast={forecast} />
        </>
      )}
    </div>
  );
};

const appStyle = {
  fontFamily: "'Poppins', sans-serif",
  padding: '10px',
  minHeight: '100vh',
  textAlign: 'center',
  transition: 'background 0.3s ease',
  color: '#fff',
};

const spinnerStyle = {
  textAlign: 'center',
  marginTop: '2rem',
  fontSize: '1.5rem',
  color: '#fff',
};

export default App;
