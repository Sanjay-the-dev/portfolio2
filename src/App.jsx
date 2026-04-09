import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'
import CursorEffect from './Components/CursorEffect.jsx'
const App = () => {


  
  return (
    <>
      <CursorEffect />
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App