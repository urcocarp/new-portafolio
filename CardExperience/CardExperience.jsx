import "./CardExperience.css"





const CardExperience =({ details })=>{

    
    return (
      <div className="workEperience">
      <h6>{details.title}</h6>
      <div className="img">
       <img  src= {details.image}/>
      </div>
      <div className="workDuration">{details.date}</div>
      <div className="button">
      <a href={details.link}>ver</a>
      </div>
        <ul>
        {details.desempeño.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    )

}

export default CardExperience