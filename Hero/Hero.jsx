import "./Hero.css"
import git from '../assets/github.png'
import phone from '../assets/what.png'
import email from '../assets/gmail.png'

function Hero(){
    return (
    <div className="titulo">
         <h1>Nicolas Rodriguez | Front end developer</h1> 
         <div className="iconos">
            <div><img src={git}></img></div>
            <div><img src={phone}></img></div>
            <div><img src={email}></img></div>
        </div>
    </div>
    );
}

export default Hero;
