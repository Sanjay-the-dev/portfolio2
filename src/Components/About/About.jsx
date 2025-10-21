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

            <div className="about-skills">
                <h1>Skills :</h1>
                <br />
                <div className="about-skills"><p>HTML5</p> <hr style={{width:"80%"}}/></div>
                <div className="about-skills"><p>CSS3</p> <hr style={{width:"80%"}}/></div>
                <div className="about-skills"><p>React.js</p> <hr style={{width:"90%"}}/></div>
                <div className="about-skills"><p>JavaScript </p> <hr style={{width:"85%"}}/></div>
                <div className="about-skills"><p>Bootstrap</p> <hr style={{width:"75%"}}/></div>
                <div className="about-skills"><p>React-router</p> <hr style={{width:"80%"}}/></div>
                <div className="about-skills"><p>Git & Github</p> <hr style={{width:"90%"}}/></div>
               
            </div>
        </div>
    </div>
  )
}

export default About