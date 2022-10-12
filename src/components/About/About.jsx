/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/pp.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineFolderSpecial} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ ME } alt="About picture" />
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
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Mom</small>
            </article>

            <article className='about__card'>
              <MdOutlineFolderSpecial className='about__icon'/>
              <h5>Projects</h5>
              <small>from 1 to 10</small>
            </article>
          </div>
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur eveniet itaque, culpa quidem facere voluptatum eos voluptatibus assumenda, cum iusto repudiandae sequi suscipit non, fugiat adipisci id officiis! Tempore, rerum.
          </p>

        
        </div>

      </div>

    </section>
  )
}

export default About