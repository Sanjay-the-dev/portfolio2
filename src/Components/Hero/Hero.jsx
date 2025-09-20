import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import downloadIcon from '../../assets/download-icon1.png'

const Hero = () => {
  return (
    <div id='Home' className='HeroSection'>

        <h1>I'm Sanjay,</h1>

        <p>"I'm a <strong>Frontend Developer</strong> focused on crafting responsive, accessible, and modern web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I transform ideas into engaging digital experiences."</p>

        <div className="hero-action">
          <Link className="anchor-link" to ="Contact" smooth  ={true} duration ={700} offset ={-100}><div className='hero-connect'>Connect</div></Link>
            
            <div className='hero-resume'>My resume <img src= {downloadIcon}  /> </div>
        </div>
    </div>
  )
}

export default Hero