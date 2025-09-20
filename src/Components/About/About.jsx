import React from 'react'
import './About.css'
import theme_pattern from '../../assets/main assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='About' className='About'>
        <div className="about-title">
        <h1 >About Me</h1>
        <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">

            <div className="about-para">Beyond coding, I enjoy solving problems and breaking down complex ideas into simple, efficient solutions. I’m always curious about how things work and love learning new technologies that help me grow as a developer. When I’m not building websites, I’m usually exploring design trends, experimenting with new projects, or improving my skills to stay ahead in the fast-changing world of frontend development.</div>

            <div className="about-skills">
                <h1>Skills :</h1>
                <br />
                <div className="about-skills"><p>HTML</p> <hr style={{width:"80%"}}/></div>
                <div className="about-skills"><p>CSS</p> <hr style={{width:"80%"}}/></div>
                <div className="about-skills"><p>REACT</p> <hr style={{width:"90%"}}/></div>
                <div className="about-skills"><p>JAVASCRIPT</p> <hr style={{width:"85%"}}/></div>
                <div className="about-skills"><p>Git & Github</p> <hr style={{width:"80%"}}/></div>
               
            </div>
        </div>
    </div>
  )
}

export default About