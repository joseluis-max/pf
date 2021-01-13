import React from 'react';
import {Link} from 'react-router-dom'
import './styles/Header.css'
const { Fragment } = require("react")

function Header(props){
  return(
  <Fragment>
  <header className="header">
    <div className="header__logo">
    <Link className="header__link"  to="/">
      <img className="header__logo_image" src="./asset/logo_blanco.png" alt="logo"/>
    </Link>
    </div>
    <div className="header__container_list">
      <div className="header__list">
        <Link className="header__list_item" to="/aboutme">About Me</Link>
        <Link className="header__list_item" to="/projects">Projects</Link>
        <Link className="header__list_item" to="/contact">Contact</Link>
      </div>
    </div>
  </header>
  </Fragment>
  )
}
export default Header;