import {Fragment} from 'react'
function DashBoard (){
  return(
    <Fragment>
      <div class="main__background">
         <img class="main__background_image" src="./asset/background.jpg" alt="main__background"/>
        </div>
        <div class="main__container">
          <p class="main__container_text"> I'm </p>
          <b>
          <div class="main__container_innerlam">
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