import React from 'react';
import About from '../Sections/About';
import Contact from '../Sections/Contact';
import Home from '../Sections/Home';
import ProjectsView from '../Sections/ProjectsView';
import ServicesView from '../Sections/ServicesView';
import './Main.css';

const Main = () => {
  return (
    <div className="main-container">
      <div id='home'><Home /></div>
      <div id='about'><About /></div>
      <div id='services'><ServicesView /></div>
      <div id='projects'><ProjectsView /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}

export default Main