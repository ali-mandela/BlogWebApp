import React from 'react'
import './css/Navbar.css'
import Loginimg from '../img/loginImg.png'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

    const user= true;
  return (<>
    <section className='nav'>
        <div className='navLeft'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-solid fa-code"></i>
        </div>
        <div className='navCenter'>
            <ul className='navList'>
                <li className='navListItem'><NavLink className="NavLink" to='/'>Home</NavLink></li>
                <li className='navListItem'><NavLink  className="NavLink" to='/'>About</NavLink></li>
                <li className='navListItem'><NavLink className="NavLink" to='/'>Contact</NavLink></li> 
                <li className='navListItem'><NavLink className="NavLink"  to='/Write'>Write</NavLink></li>
                <li className='navListItem'><NavLink className="NavLink" to='/'>Logout</NavLink></li>
            </ul>
        </div>
        <div className='navRight'>
            { user ? 
             <NavLink to='/setting'><img 
            src={Loginimg}
            alt="Login Protoype"
             /></NavLink> : <>
            <ul className='navList'> 
                <li className='navListItem'><NavLink className="NavLink"  to='/Login'>Login</NavLink></li>
                <li className='navListItem'><NavLink className="NavLink" to='/Register'>Register</NavLink></li>  
            </ul>

                
                
            </>}
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </section>
  </>)
}

export default Navbar