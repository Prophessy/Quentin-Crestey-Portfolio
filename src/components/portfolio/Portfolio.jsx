import React from 'react'
import './portfolio.css'
import ohmyfood from '../../assets/ohmyfood_img.png'
import vizionair from '../../assets/vizionair.jpg'
import Monsite from '../../assets/monsite.png'
import booki from '../../assets/booki.png'
import kanap from '../../assets/kanap.png'
import groupomania2 from '../../assets/groupomania2.jpg'
import wcs from '../../assets/wcs.png'
import toastateimg from '../../assets/toastate.jpg'

const toastate = [
  {
    id: 1,
    image: toastateimg,
    title: 'Wellness Story plateforme de solution innovante pour le bien-être. Site en construction, sortie prévu pour septembre 2023. Réalisé avec HTML / CSS / JS / TOASTFRONT (côté front-end)',
    demo: 'https://www.wellnessstory.co/'
  },
]

const wildCodeSchool = [
  {
    id: 1,
    image: wcs,
    title: `Formation Wild Code School. Les projets étant essentiellement des quêtes, voici un lien du programme de l'année`,
    demo: 'https://drive.google.com/drive/folders/10nnBrrm-E__TmcGGps3kAKGOmEVO8hw6'
  },
]

const openClassrooms = [
  {
    id: 1,
    image: groupomania2,
    title: 'Créer un réseau social (React, Node.js, MySQL, Express)',
    github: 'https://github.com/Prophessy/QuentinCrestey_7_v3_15032022',
    demo: 'https://www.youtube.com/watch?v=NRzQ6ZddFcU'
  },
  {
    id: 2,
    image: vizionair,
    title: 'Vizionair (WordPress)',
    demo: 'https://vizionair.fr/'
  },
  {
    id: 3,
    image: ohmyfood,
    title: 'OhMyFood (HTML/CSS)',
    github: 'https://github.com/Prophessy/QuentinCrestey_3_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_3_01012022/'
  },
  {
    id: 4,
    image: kanap,
    title: 'Kanap, front-end de site e-commerce (Javascript)',
    github: 'https://github.com/Prophessy/QuentinCrestey_5_14022022',
    demo: 'https://youtu.be/jY5bVvxrkyo'
  },
  {
    id: 5,
    image: booki,
    title: 'Booki, réalisé en HTML et CSS',
    github: 'https://github.com/Prophessy/QuentinCrestey_2_01012022',
    demo: 'https://prophessy.github.io/QuentinCrestey_2_01012022/'
  },
]

const Portfolio = () => {
  return (
      <section id='portfolio'>

        <h2>Notre projet chez toastate</h2>

        <div className="container portfolio__container">
          {
            toastate.map(({id, image, title, demo}) =>{
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={demo} target='_blank' className='btn btn-primary'>Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>

        <h2>Mes projets à la Wild Code School</h2>

        <div className="container portfolio__container">
          {
            wildCodeSchool.map(({id, image, title, demo}) =>{
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={demo} target='_blank' className='btn btn-primary'>Lien du programme</a>
                  </div>
                </article>
              )
            })
          }
        </div>

        <h5>! certains projets étant anciens, ils ne sont peut-être plus à jours !</h5>
        <h2>Mes projets formation OpenClassrooms</h2>

        <div className="container portfolio__container">
          {
            openClassrooms.map(({id, image, title, github, demo}) =>{
              return (
                <article key={id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    {github ? <a href={github} target='_blank' className='btn'>Github</a> : ``}
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