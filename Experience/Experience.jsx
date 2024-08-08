import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Experience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import CardExperience from "../CardExperience/CardExperience";
import Slider from "react-slick";
import { useRef } from "react";
import dev from "../assets/dev.png"
import avatar from "../assets/avatarDev.png"
import npm from "../assets/devnpm.png"
import cp from "../assets/dev_icon.png"



const Experience = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <section className="experienceContent">
         <h2 className="experienceTitle">
         <img src={dev}></img>
         <img src={avatar}></img>
         Work Eperience
         <img src={npm}></img>
         <img src={cp}></img>
         </h2>
            <div className="experienceContainer">
                <div className="arrow arrowLeft" onClick={slideLeft}>
                    <span>&lt;</span>
                </div>
                <div className="sliderWrapper">
                    <Slider ref={sliderRef} {...settings}>
                        {WORK_EXPERIENCE.map((item) => (
                            <CardExperience key={item.title} details={item} />
                        ))}
                    </Slider>
                </div>
                <div className="arrow arrowRight" onClick={slideRight}>
                    <span>&gt;</span>
                </div>
            </div>
        </section>
    );
};

export default Experience;