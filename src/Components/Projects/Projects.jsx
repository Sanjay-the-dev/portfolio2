import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/main assets/theme_pattern.svg'
import project_img from '../../assets/project-img.png'

const Projects = () => {
  return (
    <div id='Projects' className='projects'>  

      <div className="project-title">
        <h1 >Projects</h1>
        <img src={theme_pattern} alt=""  />
      </div>

      <div className="project-content">
        <img src={project_img} alt="" className='project_img'/>

        <div className="project-details">

          <h1><span className='TheGreen'> Title:</span> To-Do List</h1>
            <br />
          <p><span className='TheGreen' >Discription :</span><br/>The To-Do List App is a web application that allows users to manage their daily tasks. It was built using HTML, CSS, and JavaScript to practice core frontend concepts.
          </p>

          <br />

          <ul className='features'>
            <h1 className='TheGreen'>Features</h1>
            <li>Add Tasks – Users can type a task and add it to the list dynamically.</li>
            <li>Delete & rearrange Tasks – Tasks can be removed or rearranged from the list anytime.</li>
            <li>Local Storage used – Tasks remain saved even after refreshing the page.</li>
            <li>Responsive Layout – Works across mobile and desktop devices.</li>
         
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects;