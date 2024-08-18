// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Abstract | Help Center</div>
      <button style={buttonStyle}>Submit a request</button>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontWeight: 'bold',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#000',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
};

export default Header;
