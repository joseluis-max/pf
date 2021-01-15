import { Fragment,useState } from "react";
import Form from "../Components/Form";
import "./styles/Contacts.css";

function Contacts() {
 
    return(
      <Fragment>
         <div className="main__background">
      <img className="main__background_image" src="./asset/background4.jpg" alt="main__background"/>
    </div>
    <div className="main__contact">
      <div className="main__email_wrapper">
        <Form/>
      </div>
    </div>
    </Fragment>
    )
}

export default Contacts