import { Fragment } from "react";
import "./styles/Contacts.css";

function Contacts(params) {
    return(
      <Fragment>
         <div class="main__background">
      <img class="main__background_image" src="./asset/background4.jpg" alt="main__background"/>
    </div>
    <div class="main__contact">
      <div class="main__chat_wrapper">
        <div class="main__chat">
          <p class="main__chat_text">Ayudame con tu correo por favor</p>
        </div>
        <div class="main__chatleft">
          <p class="main__chat_text">Hola como estas sabes que no tenemos los momentos.</p>
        </div>
        <div class="main__chat">
          <p class="main__chat_text">Genial </p>
        </div>
      </div>
      <div class="main__chatBar">
        <input class="main__chatBar_input" type="text" placeholder="type here!"/>
        <button class="main__chatBar_send">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
            class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
            <path
              d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
        </button>
      </div>
    </div>
    </Fragment>
    )
}

export default Contacts