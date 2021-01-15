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
    <div className="header__socialNetwork">
      <a href="https://github.com/joseluis-max" target="_blank" rel="noreferrer">
        <img className="header__socialNetwork_logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub_logo"/>
      </a>
      <a href="https://leetcode.com/joseluis-max/" target="_blank"  rel="noreferrer">
        <img className="header__socialNetwork_logo" src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="Leetcode_logo"/>
      </a>
      <a href="https://www.freecodecamp.org/fcc6ee15ee4-1a73-47b5-a5ab-6e6e1371f4b5" target="_blank"  rel="noreferrer">
        <img className="header__socialNetwork_logo" src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_small.jpg" alt="freeCodeCamp_logo"/>
      </a>
    </div>
  </header>
  </Fragment>
  )
}
export default Header;