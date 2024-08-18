// src/components/SearchContainer.jsx
import React from 'react';

const SearchContainer = ({ searchTerm, setSearchTerm }) => {
  return (
    <div style={searchContainerStyle}>
      <h1>How can we help?</h1>
      <input
        type="text"
        style={searchBoxStyle}
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

const searchContainerStyle = {
  textAlign: 'center',
  margin: '20px 0',
};

const searchBoxStyle = {
  width: '50%',
  padding: '10px',
  fontSize: '1em',
};

export default SearchContainer;
