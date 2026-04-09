import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className='NavBar'>

      <Link className='portfolio-title' offset={-250} to='Home' onClick={closeMenu}>Portfolio</Link>

      <div className="nav-mob-open" onClick={toggleMenu}>
        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="3" rx="1.5" fill="white" />
          <rect y="8" width="20" height="3" rx="1.5" fill="white" />
          <rect y="16" width="30" height="3" rx="1.5" fill="white" />
        </svg>
      </div>

      <ul className={`NavMenu ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-mob-close" onClick={closeMenu}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L24 24M24 1L1 24" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <li><Link className='E-nav-link' offset={-100} to='About' onClick={closeMenu}>About Me </Link></li>
        <li><Link className='E-nav-link' offset={-100} to='Skills' onClick={closeMenu}>Skills</Link></li>
        <li><Link className='E-nav-link' offset={-20} to='Experience' onClick={closeMenu}>Experience</Link></li>
        <li><Link className='E-nav-link' offset={-100} to='Projects' onClick={closeMenu}>Projects</Link></li>
        {/*         <li><Link className='E-nav-link' offset={-20} duration={800} to='Contact' onClick={closeMenu}>Contact</Link></li> */}


      </ul>

      <Link duration={700} to="Contact" className="ConnectBtnWrapper">
        <button className="ConnectWithMeBtn">Connect with me</button>
      </Link>
    </nav>
  )
}

export default NavBar