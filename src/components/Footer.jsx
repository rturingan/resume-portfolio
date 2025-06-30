import React from 'react';
import '../css/Page.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rojinald James Uy Turingan. <br/>
      All rights reserved.</p>
    </footer>
  );
};

export default Footer;