import {Fragment} from 'react'
import Project from '../Components/Project'
import './styles/Projects.css'

function Projects (){
  return (
    <Fragment>
      <div className="main__background">
      <img className="main__background_image" src="./asset/background2.jpg" alt="main__background"/>
    </div>
    <div className="main__projects">
      <div className="projects__carousel">
        <Project/>
      </div>
    </div>
    </Fragment>
  )
}
export default Projects