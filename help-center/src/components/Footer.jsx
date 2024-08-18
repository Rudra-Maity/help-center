// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <h3>Abstract</h3>
        <ul style={{listStyleType:"none"}}>
          <li>Branches</li>
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul style={{listStyleType:"none"}}>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </div>
      <div>
        <h3>Community</h3>
        <ul style={{listStyleType:"none"}}>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribbble</li>
          <li>Podcast</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <ul style={{listStyleType:"none"}}>
          <li>About Us</li>
          <li>Careers</li>
          <li>Legal</li>
        </ul>
        <h4>Contact Us</h4>
        <p>info@abstract.com</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  
};

export default Footer;
