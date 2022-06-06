import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {

  const [tabColor, setTabColor] = useState('home')
  const [homeActive, setHomeActive] = useState(true)
  const [aboutActive, setAboutActive] = useState(false)
  const [servicesActive, setServicesActive] = useState(false)
  const [projectsActive, setProjectsActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  const listenScrollEvent = (event: any) => {
    if (window.scrollY < 400) {
      setTabColor('home')
      setHomeActive(true)
      setAboutActive(false)
      setServicesActive(false)
      setProjectsActive(false)
      setContactActive(false)
    } else if (window.scrollY < 950) {
      setTabColor('about')
      setHomeActive(false)
      setAboutActive(true)
      setServicesActive(false)
      setProjectsActive(false)
      setContactActive(false)
    } else if (window.scrollY < 1300) {
      setTabColor('services')
      setHomeActive(false)
      setAboutActive(false)
      setServicesActive(true)
      setProjectsActive(false)
      setContactActive(false)
    } else if (window.scrollY < 2050) {
      setTabColor('projects')
      setHomeActive(false)
      setAboutActive(false)
      setServicesActive(false)
      setProjectsActive(true)
      setContactActive(false)
    } else {
      setTabColor('contact')
      setHomeActive(false)
      setAboutActive(false)
      setServicesActive(false)
      setProjectsActive(false)
      setContactActive(true)
    } 
  }

  useEffect(() => { 
    window.addEventListener('scroll', listenScrollEvent)
    console.log(tabColor)
  })

  return (
    <div className="header-container">
      <div className="logo">RS</div>
      <div className="navbar-container">
        <div className="nav"><a href="#home" className={ homeActive ? "tab-active" : "tab-inactive" }>Home</a></div>
        <div className="nav"><a href="#about" className={ aboutActive ? "tab-active" : "tab-inactive" }>About</a></div>
        <div className="nav"><a href="#services" className={ servicesActive ? "tab-active" : "tab-inactive" }>Services</a></div>
        <div className="nav"><a href="#projects" className={ projectsActive ? "tab-active" : "tab-inactive" }>Projects</a></div>
        <div className="nav"><a href="#contact" className={ contactActive ? "tab-active" : "tab-inactive" }>Contact</a></div>
      </div>
      <div className="socials">
        <div className="social"><a href="https://twitter.com/RubanSahoo" target="_blank"><i className="fa fa-brands fa-twitter"></i></a></div>
        <div className="social"><a href="https://www.linkedin.com/in/ruban-sahoo-4a3b3817b/" target="_blank"><i className="fa fa-brands fa-linkedin"></i></a></div>
      </div>
    </div>
  )
}

export default Header