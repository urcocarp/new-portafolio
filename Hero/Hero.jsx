import { useEffect,useRef } from "react"
import "./Hero.css"
import git from '../assets/github.png'
import phone from '../assets/what.png'
import email from '../assets/gmail.png'
import discord from '../assets/discord_icon.png'

const letters= "012ab░ABFRgjkLE▆▓012ab░ABFRgjkLE▆▓"


function changeTextLetter(element) {
    let iteration = 0;
    const originalText = element.dataset.textValue;
    clearInterval(element.interval);

    element.interval = setInterval(() => {
        element.innerText = originalText
            .split("")
            .map((letter, index) => 
                index < iteration 
                    ? originalText[index] 
                    : letters[Math.floor(Math.random() * letters.length)]
            ).join("");

        if (iteration >= originalText.length) {
            clearInterval(element.interval);
        }

        iteration += 0.1;
    }, 10);
}




function Hero(){
    const h1Ref = useRef(null);

    useEffect(() => {
        const h1Element = h1Ref.current;
        if (h1Element) {
            changeTextLetter(h1Element);
        }
    }, []);

    return (
    <div className="titulo">
         <h1 ref={h1Ref}className="letter-change-text"
         data-text-value="Nicolas Rodriguez | Front end developer">Nicolas Rodriguez | Front end developer</h1> 
         <div className="iconos">
            <div><img src={git}></img></div>
            <div><img src={phone}></img></div>
            <div><img src={email}></img></div>
            <div><img src={discord}></img></div>

        </div>
    </div>
    );
}

export default Hero;
