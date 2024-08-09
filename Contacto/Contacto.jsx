import "./Contacto.css"
import git from "../assets/github-.svg"
import linkedin from "../assets/linkedin-.svg"
import whats from "../assets/whatsapp-.svg"
import gmail from "../assets/mail-.svg"

const Contacto=()=>{
    return (
        <div className="ContactoConteiner">
       
        <div className="Icon">
          <div >
            <img src={git}/>
            
            
          </div>
          <div>
            <img src={linkedin}/>
            
          </div>
          <div>
            <img src={gmail}/>
          
          </div>
          <div>
            <img src={whats}/>
            
          </div>
        </div>
        </div>
    )
}

export default Contacto