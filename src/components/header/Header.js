import React, { Component } from 'react'
import "./style.css"

export class Header extends Component {
  render() {
    return (
      <div>
         <header className="header">
    <div className="header__wrapper">
      <h1 className="header__title">
        <strong>Hi, my name is <em>Yuri</em></strong><br />
        a frontend developer
      </h1>
      <div className="header__text">
        <p>with passion for learning and creating.</p>
      </div>
      <a href="#!" className="btn">Download CV</a>
    </div>
  </header>

      </div>
    )
  }
}

export default Header