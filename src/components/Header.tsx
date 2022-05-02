import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">RS</div>
      <div className="navbar-container">
        <div className="nav"><a href="#">Home</a></div>
        <div className="nav"><a href="#">About</a></div>
        <div className="nav"><a href="#">Service</a></div>
        <div className="nav"><a href="#">Projects</a></div>
        <div className="nav"><a href="#">Contact</a></div>
      </div>
      <div className="socials">
        <div className="social"><a href="https://twitter.com/RubanSahoo" target="_blank"><i className="fa fa-brands fa-twitter"></i></a></div>
        <div className="social"><a href="https://www.linkedin.com/in/ruban-sahoo-4a3b3817b/" target="_blank"><i className="fa fa-brands fa-linkedin"></i></a></div>
      </div>
    </div>
  )
}

export default Header