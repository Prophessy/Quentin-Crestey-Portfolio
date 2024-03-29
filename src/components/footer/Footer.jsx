import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PROPHESSY</a>

      <ul className='permalinks'>
        <li><a href='#'>Accueil</a></li>  
        <li><a href='#about'>À propos</a></li> 
        <li><a href='#experience'>Expérience</a></li> 
        <li><a href='#services'>Services</a></li> 
        <li><a href='#portfolio'>Portfolio</a></li> 
        <li><a href='#testimonials'>Témoignages</a></li> 
        <li><a href='#contact'>Contact</a></li> 
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/quentin-crestey-319048214/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/Prophessy' target="_blank"><FaGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer