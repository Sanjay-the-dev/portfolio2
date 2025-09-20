import React from 'react'
import './Footer.css';
import { Link } from 'react-scroll';
import Linkedin_icon from '../../assets/Linkedin-icon.png';
import Github_icon from '../../assets/Github-icon.png';



const Footer = () => {
  return (
    <div id='Footer' className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">

            <a href="https://www.linkedin.com/in/sanjay-palanivel-012549268"><img src={Linkedin_icon} alt="" /></a>
            <a href="https://github.com/Sanjay-the-dev"><img className ='github-icon' src={Github_icon} alt=""/></a>
            
            
             
          </div>

          <div className="footer-top-right">
            <ol>
              <li><Link className= "anchor-link" smooth = {true} offset={-250} to = "Home">Home</Link></li>
              <li><Link className = "anchor-link " smooth = {true} offset = {-50} to = "About">About</Link></li>
              <li><Link className = "anchor-link" smooth = {true} offset={-20} to ="Projects">Project</Link></li>
              <li><Link className= "anchor-link" smooth = {true } offset={-20} to = "Contact">Contact</Link></li>
            </ol>
          </div>

        </div>

        <div className="footer-bottom">
          <hr />
          <p>© 2025 Sanjay. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer