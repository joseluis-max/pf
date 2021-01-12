import {Fragment} from 'react'
import Skill from '../Components/Skill'
import './styles/AboutMe.css'

function AboutMe (){
  return(
    <Fragment>
      <div class="main__wrapped">
      <div class="main__background">
        <img class="main__background_image" src="./asset/background3.jpg" alt="main__background"/>
      </div>
      <div class="main__info">
        <div class="main__infoHeader">
          <h3 class="main__infoHeader_title">About Me</h3>
        </div>
        <div class="main__infoWrapper">
          <div class="main__info_fill"></div>
          <p class="main__info_text">
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
    <div class="aboutMe">
      <figure class="aboutMe__container">
        <img class="aboutMe__container_image" src="./asset/perfil.jpg" alt=""/>
      </figure>
      <div class="aboutMe__wrapper">
        <h3 class="aboutMe__title">Passions</h3>
        <p class="aboutMe__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel elit volutpat, imperdiet orci eget,
          pretium
          dolor.
          Integer maximus eros ut metus gravida, vitae finibus mi luctus. Vivamus scelerisque eu enim sit amet dictum.
          Mauris urna
          felis, mattis eget auctor at, luctus et ipsum. Suspendisse blandit ex nec metus facilisis mattis.
          </p>
      </div>
    </div>
    <div class="aboutMe__skills">
      <h3 class="aboutMe__skills_title">Skills</h3>+
      <div class="aboutMe__skills_container">
       <Skill/>
      </div>  
    </div>
    </Fragment>
  )
}
export default AboutMe