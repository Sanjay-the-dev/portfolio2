import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import downloadIcon from '../../assets/download-icon1.png'
import resume_pdf from '../../assets/Resume-sanjay-21-9.pdf'

const Hero = () => {
  return (
    <div id='Home' className='HeroSection'>

        <h1>I'm Sanjay,</h1>

        <p>"I'm a <strong>Frontend Developer</strong> focused on crafting a responsive, accessible, and modern web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I transform ideas into engaging digital experiences."</p>

        <div className="hero-action">
          <Link className="anchor-link" to ="Contact" smooth  ={true} duration ={700} offset ={-100}><div className='hero-connect'>Connect</div></Link>
          <a className ='resume_pdf_a'href={resume_pdf} download="Resume-sanjay-21-9.pdf"><div className='hero-resume'>My resume <img src= {downloadIcon}  /> </div></a>
          
            
        </div>
    </div>
  )
}

export default Hero