import React from 'react';
import {Link} from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='NavBar'>
       <ul className='NavMenu'>
        <li> <Link className='anchor-link' offset={-250} smooth={true} to='Home'>Home</Link> </li>
        <li><Link className='anchor-link' offset={-50} smooth={true} to='About'>About</Link></li>
        <li><Link className='anchor-link' offset={-20} smooth={true} to='Projects'>Project</Link></li>
        <li><Link className='anchor-link' offset={-20} smooth={true} duration ={800}to='Contact'>Contact</Link></li>
       </ul>

      <Link className = "anchor-link" smooth={true} duration={700} to = "Contact"> <button className="ConnectWithMeBtn" >Connect with me</button></Link>
    </div>
  )
}

export default NavBar