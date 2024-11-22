import React from 'react';
import backgroundImage from '../assets/images/sunny.png'; 

const Header = () => {
  return (
    <header style={{ ...headerStyle, backgroundImage: `url(${backgroundImage})` }}>
      <h1 style={titleStyle}>WeatherWise 🌥️</h1>
    </header>
  );
};


const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  height: '150px',
  borderRadius: '15px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const titleStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: '4rem',
  fontWeight: '800',
  color: '#000000',
  letterSpacing: '2px',
};

export default Header;
