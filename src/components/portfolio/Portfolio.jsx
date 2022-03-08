import React from 'react'
import './portfolio.css'
import ohmyfood from '../../assets/ohmyfood_img.png'
import creepyeyes from '../../assets/creepyeyes.png'

const data = [
  {
    id: 1,
    image: ohmyfood,
    title: 'ohmyfood, maquette réalisé uniquement en HTML/CSS',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 2,
    image: creepyeyes,
    title: 'CreepyEyes, réalisé avec HTML/CSS et Javascript',
    github: 'https://github.com/Prophessy/ProphessyEyes',
    demo: 'https://prophessy.github.io/ProphessyEyes/'
  },
  {
    id: 3,
    image: ohmyfood,
    title: 'ohmyfood',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 4,
    image: ohmyfood,
    title: 'ohmyfood',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 5,
    image: ohmyfood,
    title: 'ohmyfood',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 6,
    image: ohmyfood,
    title: 'ohmyfood',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes travaux récents</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} target='_blank' className='btn'>Github</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Demo</a>
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