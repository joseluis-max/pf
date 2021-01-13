import {Fragment} from 'react'
import Project from '../Components/Project'
import './styles/Projects.css'

function Projects ({projects}){
  let carousel;
  const scroll = ev => {
    if (ev.target.localName === "img") {
      carousel = ev.target.parentNode.parentNode.parentNode
    } else if(ev.target.classList[0] === 'project__info'){
      carousel = ev.target.parentNode.parentNode
    }else if(ev.target.classList[0] === 'project__info_text' || ev.target.classList[0] === "project__info_view"){
       carousel = ev.target.parentNode.parentNode.parentNode
    }else{
      carousel = ev.target
    }
    // Scroll in axis X 
    if(ev.deltaY > 0){
      carousel.scrollLeft = carousel.scrollLeft + 50
    }else{
      carousel.scrollLeft = carousel.scrollLeft - 50
    }
  }
 let collectionProjects = []
  projects.forEach(p => {
    collectionProjects.push(<Project key={projects.indexOf(p)} p={p}/>)
  });
  return (
    <Fragment>
      <div className="main__background">
      <img className="main__background_image" src="./asset/background2.jpg" alt="main__background"/>
    </div>
    <div className="main__projects">
      <div onWheel = {(ev)=> scroll(ev)} className="projects__carousel">
        {collectionProjects}
      </div>
    </div>
    </Fragment>
  )
}
export default Projects