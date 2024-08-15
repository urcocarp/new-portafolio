import './About.css'
import javasc from '../assets/javascript.png'
import Html from '../assets/html.png'
import icon from '../assets/css.png'
import doc from '../assets/docker.png'
import redux from '../assets/redux.png'
import react from '../assets/react.png'
import visual from '../assets/vs.png'
import vue from '../assets/vuejs.png'
import angular from '../assets/ang.png'
import type from '../assets/typescript.png'
import sql from '../assets/sql.png'
import post from '../assets/postgresql.png'
import nico2 from '../assets/nico2.jpeg'






const About = () => {
  const handleDownloadClick=()=>{

    const link= document.createElement('a')
    link.href= '/public/Nico.pdf';
    link.download='Nico.pdf';
    // document.body.appendChild(link);
    link.click()
    // document.body.removeChild(link);
  };




    return (
      <div className='Content' id='About'>

        <div className="about">
            <h1>¡Hola soy Nicolas!</h1>
        <div className='nico'>
          <img src={nico2}></img>
        </div>
        <div className='texto'>
        <h3>
        Desde hace más de 2 años en el mundo de la programación y dediqué tiempo a estudiar de forma autodidacta e institucionales destacandome como front end & full stack. Gracias a mis habilidades pude adquirir experiencia en distintos trabajos.
        </h3>
        </div>
       <div>
       <button className='boton' onClick={handleDownloadClick}>Descarga Cv</button>
       </div>
       <div className='scroller'>
       <ul className='img-list scroller__inner'>
        <li><img src={javasc}></img></li>
        <li><img src={Html}></img></li>
        <li><img src={icon}></img></li>
        <li><img src={sql}></img></li>
        <li><img src={react}></img></li>
        <li><img src={redux}></img></li>
        <li><img src={visual}></img></li>
        <li><img src={angular}></img></li>
        <li><img src={type}></img></li>
        <li><img src={doc}></img></li>
        <li><img src={vue}></img></li>
        <li><img src={post}></img></li>
        <li><img src={javasc}></img></li>
        <li><img src={Html}></img></li>
        <li><img src={icon}></img></li>
        <li><img src={sql}></img></li>
        <li><img src={react}></img></li>
        <li><img src={redux}></img></li>
        <li><img src={visual}></img></li>
        <li><img src={angular}></img></li>
        <li><img src={type}></img></li>
        <li><img src={doc}></img></li>
        <li><img src={vue}></img></li>
        <li><img src={post}></img></li>
        <li><img src={javasc}></img></li>
        <li><img src={Html}></img></li>
        <li><img src={icon}></img></li>
        <li><img src={sql}></img></li>
        <li><img src={react}></img></li>
        <li><img src={redux}></img></li>
        <li><img src={visual}></img></li>
        <li><img src={angular}></img></li>
        <li><img src={type}></img></li>
        <li><img src={doc}></img></li>
        <li><img src={vue}></img></li>
        <li><img src={post}></img></li>
        <li><img src={javasc}></img></li>
        <li><img src={Html}></img></li>
        <li><img src={icon}></img></li>
        <li><img src={sql}></img></li>
        <li><img src={react}></img></li>
        <li><img src={redux}></img></li>
       </ul>
       </div>
        </div>
      </div>
    );
}

export default About;
