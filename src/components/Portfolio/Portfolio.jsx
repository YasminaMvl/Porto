import React from 'react'
import './portfolio.css'
import IMG3 from '../../assets/nft.png'
import IMG6 from '../../assets/site.png'
import IMG7 from '../../assets/snake.png'
import IMG5 from '../../assets/card.png'
import IMG1 from '../../assets/OFood.jpg'
import IMG2 from '../../assets/food.jpg'

//DATA//

const data = [
    {
      id: 2,
      image: IMG2,
      title: 'O Food',
      github: 'https://github.com/YasminaMvl/OFood',
      demo: 'https://github.com/YasminaMvl/OFood',
  } ,
  {
      id: 1,
      image: IMG1,
      title: 'Yammy s',
      github: 'https://github.com/YasminaMvl/Yammys',
      demo: 'https://github.com/YasminaMvl/Yammys',
  } ,

  {
      id: 3,
      image: IMG3,
      title: 'NFT card',
      github: 'https://github.com/YasminaMvl/NFT-card-challange',
      demo: 'https://github.com/YasminaMvl/NFT-card-challange',
  } ,

  {
      id:6 ,
      image: IMG6,
      title: 'Interactive website',
      github:'https://github.com/YasminaMvl/Site-interactif' ,
      demo:'https://github.com/YasminaMvl/Site-interactif' ,
  } ,
  {
      id: 7,
      image: IMG7,
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


const Projects = () => {
  return (
    <section id='projects'>
      <h5>Work in progress...</h5>
      <h2>Javascript Projects</h2>

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

export default Projects