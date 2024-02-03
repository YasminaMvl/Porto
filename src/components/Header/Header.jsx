/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import ME1 from '../../assets/me.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './header.css';


const Header = () => {
  return (
    <section className='header'>
      <h5>Hello , I'm</h5>
      <h2>Yasmina </h2>
      <h5>Junior </h5>
      <h5>Front end Developer  </h5>
      <h5>&</h5>
      <h5>UI /UX Designer</h5>

        <div className="container">        
          <div className="socials">
           
            <a href="https://github.com/YasminaMvl"> <FontAwesomeIcon icon= {faGithub} size='2x' style={{ color: '#e6e913' }}  /></a>

            
          <a href="https://www.linkedin.com/in/yasmina-movileanu-08196b195/"><FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#e6e913' }}/></a>
          </div>
          
        <div className="container-header__container">
          
        <div className="header-about__me">
            <div className="header-image">
              <img src={ ME1 } alt="Header picture" />
            </div>
            <div className="btn_socials ">
          <a href="src/assets/Alternance_Marketing_Digital.pdf" className="btn btn-primary"> Telecharger CV</a>
          </div>
          </div>
        </div>
        </div>


    </section>
  )
}

export default Header;