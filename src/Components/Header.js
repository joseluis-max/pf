import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Header.css'
const { Fragment } = require("react")

function Header(props){
  return(
  <Fragment>
  <header class="header">
    <div class="header__logo">
    <Link class="header__link"  to="/">
      <img class="header__logo_image" src="./asset/logo_blanco.png" alt="logo"/>
    </Link>
    </div>
    <div class="header__container_list">
      <div class="header__list">
        <Link class="header__list_item" to="/aboutme">About Me</Link>
        <Link class="header__list_item" to="/projects">Projects</Link>
        <Link class="header__list_item" to="/contact">Contact</Link>
      </div>
    </div>
  </header>
  </Fragment>
  )
}
export default Header;