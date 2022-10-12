import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Work in progress...</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

            <h3>This is a portfolio item title</h3>
            <a href="https://github.com" className='btn' target='_blank' rel="noreferrer"  >Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          
        </article>
      </div>
      </section>
  )
}

export default Portfolio