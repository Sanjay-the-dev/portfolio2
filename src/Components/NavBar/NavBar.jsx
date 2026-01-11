
import {Link} from 'react-scroll'

import './NavBar.css'

const NavBar = () => {


  return (
    
    <div className='NavBar'>
      <h1 className='portfolio-title'>Portfolio</h1>
       <ul className='NavMenu ' >


        <li> <Link className='E-nav-link' offset={-250}  to='Home'>Home</Link> </li>
        <li><Link className='E-nav-link' offset={-50}  to='About'>About Me</Link></li>
        <li><Link className='E-nav-link' offset={-20}  to='Projects'>Projects</Link></li>
        <li><Link className='E-nav-link' offset={-20}  duration ={800}to='Contact'>Contact</Link></li>
       </ul>

      <Link   duration={700} to = "Contact"> <button className="ConnectWithMeBtn" >Connect with me</button></Link>
    </div>
  )
}

export default NavBar