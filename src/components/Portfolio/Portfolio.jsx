import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/nft.png'
import IMG2 from '../../assets/site-de-voyage.png'
import IMG3 from '../../assets/site.png'
import IMG4 from '../../assets/snake.png'
import IMG5 from '../../assets/card.png'

//DATA//

const data = [
  {
      id: 1,
      image: IMG1,
      title: 'NFT card',
      github: 'https://github.com/YasminaMvl/NFT-card-challange',
      demo: 'https://github.com/YasminaMvl/NFT-card-challange',
  } ,
  {
      id: 2,
      image: IMG2 ,
      title: 'Travel website',
      github:'https://github.com/YasminaMvl/Site-de-voyage-HTML-CSS' ,
      demo: 'https://github.com/YasminaMvl/Site-de-voyage-HTML-CSS',
  } ,
  {
      id:3 ,
      image: IMG3,
      title: 'Interactive website',
      github:'https://github.com/YasminaMvl/Site-interactif' ,
      demo:'https://github.com/YasminaMvl/Site-interactif' ,
  } ,
  {
      id: 4,
      image: IMG4,
      title: 'Snake game',
      github: 'https://github.com/YasminaMvl/Snake-Game',
      demo: 'https://github.com/YasminaMvl/Snake-Game',
  } ,
  {
      id: 5,
      image: IMG5,
      title: 'Card Challenge',
      github: 'https://github.com/YasminaMvl/Card-Challenge',
      demo: 'https://github.com/YasminaMvl/Card-Challenge',
  } ,
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Work in progress...</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                    <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href= {github} className='btn' target='_blank' rel="noreferrer"  >Github</a>
                  <a href= {demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }


      </div>
      </section>
  )
}

export default Portfolio