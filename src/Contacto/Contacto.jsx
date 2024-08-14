import "./Contacto.css"
import git from "../assets/github-.svg"
import linkedin from "../assets/linkedin-.svg"
import whats from "../assets/whatsapp-.svg"
import gmail from "../assets/mail-.svg"

const Contacto=()=>{
    return (
        <div className="ContactoConteiner" id="Contac">
       
        <div className="Icon">
          <div >
          <a href="https://github.com/urcocarp" target="_blank" rel="noopener noreferrer">
            <img src={git}/>
          </a>
            
            
          </div>
          <div>
          <a href="https://linkedin.com/in/nico-rodriguez86" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}/>
          </a>
            
          </div>
          <div>
          <a href="mailto:urcocarp1986.nr@gmail.com" target="_blank" rel="noopener noreferrer">

            <img src={gmail}/>
          </a>
          
          </div>
          <div>
          <a href="https://wa.link/c53i86" target="_blank" rel="noopener noreferrer">
            
            <img src={whats}/>
          </a>
            
          </div>
        </div>
        </div>
    )
}

export default Contacto