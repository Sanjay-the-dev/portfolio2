import React, { useEffect } from 'react'
import './About.css'
import { useRef } from 'react'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */


const About = () => {

  const sectionRef = useRef(null);

  useEffect(()=>
  {
    const anim_elements = sectionRef.current.querySelectorAll('.anim');
    const observer = new IntersectionObserver((entries)=>
  {
    
     entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
     });
  }, {threshold:"0.2"})

  anim_elements.forEach((element)=> observer.observe(element))

  },[])

  return (


    <div ref={sectionRef} id='About' className='About'>
        <div className="about-titlew position-relative">
        <h5 className='display-1 text-primary  position-relative vw-100  text-center overflow-hidden' >About Me <p className='anim title-slide-down '>-</p> <p className='anim title-slide-up'>-</p></h5>

        </div>
        <div className="about-section">

            <div className="about-para">Beyond coding, I enjoy solving problems and breaking down complex ideas into simple, efficient solutions. I’m always curious about how things work and love learning new technologies that help me grow as a developer. When I’m not building websites, I’m usually exploring design trends, experimenting with new projects, or improving my skills to stay ahead in the fast-changing world of frontend development.</div>

            <div >
                <h1 className='text-primary display-5'>Skills :</h1>
                <br />
                <div className='row ps-md-5 ms-md-3'>
                  <div className="col">
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> CSS3</p>  </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> JavaScript </p>  </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> HTML5 </p> </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> React.js</p> </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> Git & Github</p> </div>
                  </div>

                  <div className="col">
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> Redux Toolkit</p> </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> Bootstrap </p> </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> TailwindCSS</p> </div>
                    <div className="about-skills"><p> <span className='px-2 text-success'>➤ </span> React-router</p>  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About