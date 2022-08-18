import React from 'react'
import './portfolio.css'
import ohmyfood from '../../assets/ohmyfood_img.png'
import vizionair from '../../assets/vizionair.jpg'
import Monsite from '../../assets/monsite.png'
import booki from '../../assets/booki.png'
import kanap from '../../assets/kanap.png'
import groupomania2 from '../../assets/groupomania2.jpg'

const data = [
  {
    id: 1,
    image: groupomania2,
    title: 'Créer un réseau social (React, Node.js, MySQL, Express)',
    github: 'https://github.com/Prophessy/QuentinCrestey_7_v3_15032022',
    demo: 'https://www.youtube.com/watch?v=NRzQ6ZddFcU'
  },
  {
    id: 2,
    image: Monsite,
    title: 'Mon site (React, Html, CSS)',
    github: 'https://github.com/Prophessy/Quentin-Crestey-Portfolio',
    demo: 'https://prophessy.github.io/Quentin-Crestey-Portfolio/'
  },
  {
    id: 1,
    image: vizionair,
    title: 'Vizionair (WordPress)',
    demo: 'https://vizionair.fr/'
  },
  {
    id: 4,
    image: ohmyfood,
    title: 'OhMyFood (HTML/CSS)',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 5,
    image: kanap,
    title: 'Kanap, front-end de site e-commerce (Javascript)',
    github: 'https://github.com/Prophessy/QuentinCrestey_5_14022022',
    demo: 'https://youtu.be/jY5bVvxrkyo'
  },
  {
    id: 6,
    image: booki,
    title: 'Booki, réalisé en HTML et CSS',
    github: 'https://github.com/Prophessy/QuentinCrestey_2_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_2_01012022/'
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