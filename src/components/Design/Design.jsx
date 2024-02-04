import React from 'react'
import './design.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
//import IMG7 from '../../assets/7.png'

//DATA//

const data = [
   {
      id: 2,
      image: IMG2,
     
  },
   {
      id:4 ,
      image: IMG4,
     
  } ,
  {
      id: 5,
      image: IMG5,
     
  } ,
    {
      id: 1,
      image: IMG1,
      
  } ,
 

  {
      id: 3,
      image: IMG3,
      
  } ,

 
  {
      id: 6,
      image: IMG6,
      
  } ,
  //{
   //   id: 7,
     // image: IMG7,
  
 // } ,

]


const Designs = () => {
  return (
    <section id='projects'>
      <h5>Work in progress...</h5>
      <h2>Design training</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} />
                </div>
                  
    
                
              </article>
            )
          })
        }

        

      </div>
      </section>

      
      
  )
}

export default Designs