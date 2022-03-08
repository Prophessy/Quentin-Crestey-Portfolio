import React from 'react'
import './about.css'
import ME from '../../assets/George-Clooney-est-le-plus-bel-homme-du-monde-c-est-scientifiquement-prouve.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

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
              <FaAward className='about__icon'/>
              <h5>Expérience</h5>
              <small>1+ années d'experiences professionnelles</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ clients dans le monde entier</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projets</h5>
              <small>10+ Projets complétés</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati a corporis ipsam facilis perferendis libero, harum, suscipit aperiam modi laborum illo doloremque accusamus animi, minus ex totam eius fuga soluta?
          </p>

          <a href='#contact' className='btn btn-primary'>Parlons</a>
        </div>
      </div>
    </section>
  )
}

export default About