/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ME1 from '../../assets/pp2.png';
import './header.css';


const Header = () => {
  return (
    <section className='header'>
      <h5>Hello , I'm</h5>
      <h2>Yasmina </h2>
      <h5>FullStack Developer</h5>

        <div className="container">
          <div className="btn_socials ">
          <a href="src/assets/CV_Yasmina_Movileanu.pdf" className="btn btn-primary"> Telecharger CV</a>
          <div className="socials">
          <a href="https://github.com/YasminaMvl"> GitHub</a>
   
          <a href="https://www.linkedin.com/in/yasmina-movileanu-08196b195/">LinkedIn</a>
          </div>
          </div>
          
          
        <div className="container-header__container">
          
        <div className="header-about__me">
            <div className="header-image">
              <img src={ ME1 } alt="Header picture" />
            </div>
          </div>
        </div>
        </div>


    </section>
  )
}

export default Header;