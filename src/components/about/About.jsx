import React from 'react'
import './about.css'
import ME from '../../assets/cours-informatique-programmation.jpg'
import {FiWatch} from 'react-icons/fi'
import {BiSearchAlt} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Faire connaissance</h5>
      <h2>à propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="image de moi"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiWatch className='about__icon'/>
              <h5>Rigueur</h5>
              <small>La satisfaction du travail bien fait</small>
            </article>
            <article className='about__card'>
              <BiSearchAlt className='about__icon'/>
              <h5>Curiosité</h5>
              <small>Pour se perfectionner toujours plus</small>
            </article>
            <article className='about__card'>
              <FiHeart className='about__icon'/>
              <h5>Passion</h5>
              <small>L'essence de ce métier</small>
            </article>
          </div>

          <p>
            Web développeur junior ayant un fort attrait pour l'intégration de site moderne et dynamique.<br/>
            Si mes projets vous plaisent je serais ravi de vous aider dans les vôtres.<br/>
            N'hésitez pas à prendre contact en cliquant sur le bouton juste en dessous ! :D
          </p>

          <a href='#contact' className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About