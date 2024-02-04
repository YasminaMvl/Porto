/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import PANDA from '../../assets/meee.png'
import {FaAward} from 'react-icons/fa'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>


      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ PANDA } alt="About picture" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Junior</small>
            </article>
             
          

            <article className='about__card'>
              <MdOutlineFolderSpecial className='about__icon'/>
              <h5>Projets</h5>
              <small>En cours...</small>
            </article>
          </div>
          
          <p>
            Trés passionnée par le dévelopement web et le UI/UX, j'ai choisi d'y consacrer beaucoup de temps et d'amour.
            J'aime créer des expériences soignées et fonctionnelles et découvrir les autres facettes du monde de l'informatique !
             Je fais preuve d'une  facilité de contact et d'une énorme soif d'apprendre .
          </p>

        
        </div>

      </div>

    </section>
  )
}

export default About