import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity('');
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={inputStyle}
      />
      <button onClick={handleSearch} style={buttonStyle}>
        <FaSearch />
      </button>
    </div>
  );
};

const searchBarStyle = {
  textAlign: 'center',
  margin: '2rem 0',
};

const inputStyle = {
  padding: '0.8rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginRight: '0.5rem',
  width: '70%',
  maxWidth: '400px',
};

const buttonStyle = {
  padding: '0.8rem',
  borderRadius: '5px',
  background: '#4A90E2',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
};

export default SearchBar;
