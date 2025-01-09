import React from 'react'
import Home from '../Components/Home';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Project from '../Components/Project';
import Skills from '../Components/Skills';
import Certification from'../Components/Certification';
import Contact from'../Components/Contact';


const Pages = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Experience/>
      <Education/>
      <Project/>
      <Skills/>
      <Certification/>
      <Contact/>
    </div>
  )
}

export default Pages
