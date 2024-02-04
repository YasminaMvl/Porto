import React from 'react';
import './design.css';
import PIC1 from '../../assets/1.png';
import PIC2 from '../../assets/2.png';
import PIC3 from '../../assets/3.png';
import PIC4 from '../../assets/4.png';
import PIC5 from '../../assets/5.png';
import PIC6 from '../../assets/6.png';

// DATA //

const data = [
  {
    id: 2,
    image: PIC2,
  },
  {
    id: 4,
    image: PIC4,
  },
  {
    id: 5,
    image: PIC5,
  },
  {
    id: 1,
    image: PIC1,
  },
  {
    id: 3,
    image: PIC3,
  },
  {
    id: 6,
    image: PIC6,
  },
];

const Designs = () => {
  return (
    <section id='projects'>
      <h5>Work in progress...</h5>
      <h2>Design training</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image }) => (
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={`Design ${id}`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Designs;
