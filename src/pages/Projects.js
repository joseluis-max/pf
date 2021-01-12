import {Fragment} from 'react'
import Project from '../Components/Project'
import './styles/Projects.css'

function Projects (){
  return (
    <Fragment>
      <div class="main__background">
      <img class="main__background_image" src="./asset/background2.jpg" alt="main__background"/>
    </div>
    <div class="main__projects">
      <div class="projects__carousel">
        <Project/>
      </div>
    </div>
    </Fragment>
  )
}
export default Projects