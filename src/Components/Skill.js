function Skill({data}) {
  return (
    <div className="skills__skill">
          <div className="skills__skill_container">
            <figure className="skills__skill_wrapperImage">
              <img className="skills__skill_image" src={data.img} alt=""/>
            </figure>
            <div className="skills__skill_nivel">
              <div className="skill__nivel_bar">
                <div className={"nivel__bar_fill " + data.level}></div>
                <div className="nivel__bar_lines">
                  <div className="bar__lines"></div>
                  <div className="bar__lines"></div>
                  <div className="bar__lines"></div>
                  <div className="bar__lines"></div>
                  <div className="bar__lines"></div>
                  <div className="bar__lines"></div>
                </div>
              </div>
              <div className="skills__skill_tag">
                <p className="skill__tag_text">God</p>
                <p className="skill__tag_text">Expert</p>
                <p className="skill__tag_text">Advanced</p>
                <p className="skill__tag_text">Intermediate</p>
                <p className="skill__tag_text">Elementary</p>
                <p className="skill__tag_text">Beginner</p>
              </div>
            </div>
          </div>
        <h6 className="skill__info_title">{data.name}</h6>
      </div>
  )
}

export default Skill