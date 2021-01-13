import {Fragment} from 'react'
function DashBoard (){
  return(
    <Fragment>
      <div className="main__background">
         <img className="main__background_image" src="./asset/background.jpg" alt="main__background"/>
        </div>
        <div className="main__container">
          <p className="main__container_text"> I'm </p>
          <b>
          <div className="main__container_innerlam">
              JOSE LUIS <br/>
              VALDIVIEZO PENA<br/> 
              FRONTED DEVELOPVER<br/>
              AND MERN DEVELOPVER<br/>
          </div>
          </b>
      </div>
    </Fragment>
  )
}

export default DashBoard