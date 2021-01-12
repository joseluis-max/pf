import {Fragment} from 'react'
import Skill from '../Components/Skill'
import './styles/AboutMe.css'

function AboutMe ({skills}){
  let skill = []
  skills.forEach( s => {
    skill.push(<Skill key={skills.indexOf(s)} data={s}/>)
  })
  return(
    <Fragment>
      <div className="main__wrapped">
      <div className="main__background">
        <img className="main__background_image" src="./asset/background3.jpg" alt="main__background"/>
      </div>
      <div className="main__info">
        <div className="main__infoHeader">
          <h3 className="main__infoHeader_title">About Me</h3>
        </div>
        <div className="main__infoWrapper">
          <div className="main__info_fill"></div>
          <p className="main__info_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel elit volutpat, imperdiet orci eget,
            pretium
            dolor.
            Integer maximus eros ut metus gravida, vitae finibus mi luctus. Vivamus scelerisque eu enim sit amet dictum.
            Mauris urna
            felis, mattis eget auctor at, luctus et ipsum. Suspendisse blandit ex nec metus facilisis mattis. Donec non
            facilisis
            odio. Morbi pretium nibh euismod tellus hendrerit, at pulvinar risus consequat.
          </p>
        </div>
      </div>
    </div>
    <div className="aboutMe">
      <figure className="aboutMe__container">
        <img className="aboutMe__container_image" src="./asset/perfil.jpg" alt=""/>
      </figure>
      <div className="aboutMe__wrapper">
        <h3 className="aboutMe__title">Passions</h3>
        <p className="aboutMe__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel elit volutpat, imperdiet orci eget,
          pretium
          dolor.
          Integer maximus eros ut metus gravida, vitae finibus mi luctus. Vivamus scelerisque eu enim sit amet dictum.
          Mauris urna
          felis, mattis eget auctor at, luctus et ipsum. Suspendisse blandit ex nec metus facilisis mattis.
          </p>
      </div>
    </div>
    <div className="aboutMe__skills">
      <h3 className="aboutMe__skills_title">Skills</h3>
      <div className="aboutMe__skills_container">
       {skill}
      </div>  
    </div>
    </Fragment>
  )
}
export default AboutMe