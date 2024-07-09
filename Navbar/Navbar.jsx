import './Navbar.css'
import yo from '../assets/yop.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
    const[menuOpen, setMenuOpen]=useState(false)


    return (
        <nav className='navbar'>
         <div className='tittle'>
            <img src={yo}/>
            <h2>Nicolas Rodriguez</h2>

         </div>
         <div className='menu' onClick={()=>{
            setMenuOpen(!menuOpen)
         }}>
             <span></span>
             <span></span>
             <span></span>
             
         </div>
        
          <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink>Sobre Mi</NavLink>
            </li>

            <li>
                <NavLink>Experiencia</NavLink>
            </li>

            <li>
                <NavLink>Portafolio</NavLink>
            </li>

            <li>
                <NavLink>Contacto</NavLink>
            </li>
          </ul>
        </nav>
    );
}

export default Navbar;
