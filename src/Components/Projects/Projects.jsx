import React from 'react'
import './projects.css'
/* import theme_pattern from '../../assets/main assets/theme_pattern.svg' */
import project_img1 from '../../assets/Project Images/E-commerce.jpg'
import project_img2 from '../../assets/Project Images/Wellness_img.jpg'
import project_img3 from '../../assets/Project Images/project-img.png'

const Projects = () => {
  return (
    <div id='Projects' className='projects'>  

            {/*   project -1  */}

      <div className="project-title">
        <h1 className='display-1 text-primary '>Projects</h1>
      </div>



      <div className="project-content" id='first-project-content'>

        <a href="https://e-commerce7265.netlify.app">
        <img src={project_img1} alt="" className='project_img1'/>
        </a>

        <div className="project-details">

          <h1 className='project-content-title' ><span className='TheGreen'> Title:</span> E-commerce website</h1>

            <br className='title-discription-br' />
          <p><span className='TheGreen' >Discription :</span><br/>The E-commerce website provides a seamless online shopping experience with product browsing, category filtering, cart management — all optimized for both desktop and mobile users.
          </p>
            <br  />
          <p><span className='TheGreen' >Development Tools & Languages:</span><br/> React.js, HTML5,  CSS3, JavaScript (ES6+), Bootstrap, React-Router, node.js, npm ,Vite.
          </p>

          <br />

          <ul className='features'>
            <h1 className='TheGreen'>Features</h1>
            <li>🏠Home Page: Displays products with dynamic filtering and search functionality.</li>
            <li>🔍Shows detailed product information with image, price, and description.</li>
            <li>🛒 Shopping Cart System: Add, remove, and update item quantities with real-time total calculation.</li>
            <li>💾 Local Storage Integration: Persists cart data across page reloads.</li>
            <li>⚡ Fast & Lightweight: Built using React components with efficient state management and smooth navigation.</li>
         
          </ul>

        </div>

      </div>




            {/*   project - 2 */}


      <div className="project-content" >

        <a href="https://wellness-and-habit-tracker.netlify.app">
        <img src={project_img2} alt="" className='project_img1'/>
        </a>

        <div className="project-details">

          <h1 className='project-content-title' ><span className='TheGreen'> Title:</span>Wellness & Habit Tracking </h1>
            <br className='title-discription-br' />
          <p><span className='TheGreen' >Discription :</span><br/>The application allows users to track daily habits such as water intake, meditation, exercise, and screen time, with real-time UI updates and persistent storage through localStorage.Implemented a weekly analytics dashboard using Recharts, visualizing habit completion trends across the last seven days. Integrated React-Toastify for interactive motivational notifications and added a Dark/Light mode toggle for enhanced user accessibility.
          </p>
            <br  />
          <p><span className='TheGreen' >Development Tools & Languages:</span><br/> HTML5, CSS3,JavaScript(ES6+), React.js ,Redux Toolkit, Bootstrap , React-router, Recharts and Bootstrap
          </p>


          <br />

          <ul className='features'>
            <h1 className='TheGreen'>Features</h1>
            <li>Daily habit tracking with Redux global state management.</li>
            <li>Persistent data storage using localStorage</li>
            <li>Weekly progress visualization using Bar Charts (Recharts)</li>
            <li>Dark/Light theme switcher with dynamic styling.</li>
         
          </ul>
        </div>
      </div>


            {/*   project -3   */}

      <div className="project-content">

        <a href="https://todolist388.netlify.app">
        <img src={project_img3} alt="" className='project_img3'/>
        </a>

        <div className="project-details">

          <h1 className='project-content-title' ><span className='TheGreen'> Title:</span> To-Do List</h1>
            <br className='title-discription-br' />
          <p><span className='TheGreen' >Discription :</span><br/>The To-Do List App is a web application that allows users to manage their daily tasks. It was built using HTML, CSS, and JavaScript to practice core frontend concepts.
          </p>
            <br  />
          <p><span className='TheGreen' >Development Tools & Languages:</span><br/> React.js, HTML5,  CSS3, JavaScript (ES6+), node.js, npm ,Vite.
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