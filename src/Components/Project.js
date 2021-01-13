function Project({p}){
  console.log(p)
  return(
    <div className="projects__project">
          <div className="project__wrapper">
            <img className="project__wrapper_image" src={p.image} alt="rock-papper-scissors"/>
          </div>
          <div className="project__info">
            <p className="project__info_text">
              {p.description.text}
            </p>
            <button className="project__info_view">Go to Project</button>
          </div>
    </div>
  )
}

export default Project