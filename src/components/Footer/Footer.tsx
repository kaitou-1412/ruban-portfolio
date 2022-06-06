import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contacts">
        <div className="footer-contact">
          <a href="https://twitter.com/RubanSahoo" target="_blank">
            <i className="fa fa-brands fa-twitter"></i>
          </a>
        </div>
        <div className="footer-contact">
        <a href="https://www.linkedin.com/in/ruban-sahoo-4a3b3817b/" target="_blank">
          <i className="fa fa-brands fa-linkedin"></i>
        </a>
        </div>
        <div className="footer-contact">
        <a href="https://github.com/kaitou-1412" target="_blank">
          <i className="fa fa-brands fa-github"></i>
        </a>
        </div>
        <div className="footer-contact">
          <i className="fa fa-brands fa-envelope"></i>  ruban1work@gmail.com
        </div>
      </div>
      <div className="footer-copyright">&#169; 2022, Sahoo Corps Pvt. Ltd. All rights reserved.</div>
    </div>
  )
}

export default Footer