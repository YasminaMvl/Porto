import React from 'react';
import ME1 from '../../assets/panda-head-avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './header.css';

const Header = () => {
  return (
    <section className='header'>
      <div className='container'>
        <div className='head'>
          <h5 className='color-light'>Hello , I'm</h5>
          <h2 className='color-primary'>Yasmina </h2>
          <h5 className='color-light'>Junior </h5>
          <h5 className='color-light'>Front end Developer </h5>
          <h5 className='color-light'>&</h5>
          <h5 className='color-light'>UI /UX Designer</h5>
        </div>
        <div className='container-header__container'>
          <div className='header-about__me'>
            <div className='socials'>
              <a href='https://github.com/YasminaMvl'>
                <FontAwesomeIcon icon={faGithub} size='2x' style={{ color: '#e6e913' }} />
              </a>
              <a href='https://www.linkedin.com/in/yasmina-movileanu-08196b195/'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#e6e913' }} />
              </a>
            </div>
            <div className='btn_social'>
              <a href='src/assets/Alternance_Marketing_Digital.pdf' className='btn btn-primary'>
                Télécharger CV
              </a>
            </div>
          </div>
          <div className='header-image'>
            <img src={ME1} alt='Header picture' width='550px' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

