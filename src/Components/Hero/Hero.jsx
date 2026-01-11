import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
import downloadIcon from '../../assets/download-icon1.png'
import resume_pdf from '../../assets/Resume/Sanjay_Frontend_Developer_Resume.pdf'
import { useRef , useEffect } from 'react';

const Hero = () => {


  let sectionRef = useRef(null);

  useEffect (()=> 
  {
    const anim_elements = sectionRef.current.querySelectorAll('.anim');

    const observer = new IntersectionObserver((entries)=>{

      entries.forEach((entry)=>
      {
        if(entry.isIntersecting ){
           entry.target.classList.add("visible")
           observer.unobserve(entry.target);
        }
      })
    }, {threshold:"0.4"})

    anim_elements.forEach((entry)=> observer.observe(entry))
  },[])
   
  
  return (
    <div ref={sectionRef} id='Home' className='HeroSection position-relative'>

        <h1 className='postion-relative'>I'm Sanjay,<span className='anim  slide_to_left' >-</span></h1>

         <p className='anim slide_to_down  ' style={{position:'relative',zIndex:"2"}}>
          I’m a <strong>Frontend Developer</strong> building responsive, accessible, <span > . </span>and modern web applications.
          I work with React, Redux Toolkit, Bootstrap, and Tailwind CSS.
          With a strong foundation in HTML, CSS, and JavaScript, I turn ideas into engaging digital experiences.
        </p>
        <div className="hero-action anim slide_btn  " style={{position:'relative',zIndex:"2"}}>
          <Link  to ="Contact"  duration ={700} offset ={-100}><div className='hero-connect'>Connect</div></Link>
          
          <a className ='resume_pdf_a'href={resume_pdf} download="Sanjay_Frontend_developer_resume"><div className='hero-resume'>My resume <img src= {downloadIcon}  /> </div></a>
               
        </div>

        <img className='hero-bg' src="/BG-img/bg-img-hero.webp" alt="" width={"600"} height={"auto"}  fetchPriority='high' decoding='async' />


    </div>
  )
}

export default Hero