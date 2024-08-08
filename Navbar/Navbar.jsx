import './Navbar.css'
import yo from '../assets/yop.png'
import { NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'


const Navbar = () => {
    const[menuOpen, setMenuOpen]=useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        
         {(!isMobile || menuOpen  )&&(
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
          </ul>)}
        </nav>
    );
}

export default Navbar;
