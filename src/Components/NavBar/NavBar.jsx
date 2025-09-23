import React, { useRef } from 'react';
import {Link} from 'react-scroll'
import menu_close from '../../assets/main assets/menu_close.svg'
import menu_open from '../../assets/main assets/menu_open.svg'
import './NavBar.css'

const NavBar = () => {

  const menuRef = useRef();

  const closeMenu = ()=>{ menuRef.current.style.right="-450px"; console.log("workingi")}
  const openMenu =()=>{menuRef.current.style.right = "0px"}
  return (
    
    <div className='NavBar'>

      <img className='nav-mob-open' onClick={openMenu} src={menu_open} alt="" />

       <ul className='NavMenu' ref={menuRef} >

        <img className='nav-mob-close' src={menu_close} onClick={closeMenu} alt="" />
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