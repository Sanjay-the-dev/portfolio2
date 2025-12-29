import React from 'react'
import './About.css'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */


const About = () => {
  return (
    <div id='About' className='About'>
        <div className="about-title">
        <h5 className='display-1 text-primary ' >About Me</h5>

        </div>
        <div className="about-section">

            <div className="about-para">Beyond coding, I enjoy solving problems and breaking down complex ideas into simple, efficient solutions. I’m always curious about how things work and love learning new technologies that help me grow as a developer. When I’m not building websites, I’m usually exploring design trends, experimenting with new projects, or improving my skills to stay ahead in the fast-changing world of frontend development.</div>

            <div >
                <h1 className='text-primary display-5'>Skills :</h1>
                <br />
                <div className='row ps-md-5 ms-md-3'>
                  <div className="col">
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> HTML5 </p> </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> CSS3</p>  </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> JavaScript </p>  </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> React.js</p> </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> Git & Github</p> </div>
                  </div>

                  <div className="col">
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> Redux Toolkit</p> </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> Bootstrap </p> </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> TailwindCSS</p> </div>
                    <div className="about-skills"><p> <span className='px-2'>➤ </span> React-router</p>  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About