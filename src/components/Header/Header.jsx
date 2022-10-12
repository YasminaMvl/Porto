/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ME1 from '../../assets/pp2.png'
import './header.css'

const Header = () => {
  return (
    <section className='header'>
      <h5>Hello I'm </h5>
      <h2>Yasmina M.</h2>
      <small>Fullstack Developer</small>

        <div className="container">
          <a href="src/assets/cv.pdf" className="btn btn-primary"> Download CV</a>
        </div>
        <div className="container header__container">
          <div className="header-about__me">
            <div className="header-image">
              <img src={ ME1 } alt="Header picture" />
            </div>
          </div>
        </div>


    </section>
  )
}

export default Header;