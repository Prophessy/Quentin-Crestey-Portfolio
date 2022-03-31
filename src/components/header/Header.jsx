import React from 'react'
import './header.css'
import CTA from './CTA'
import moi from '../../assets/moi-PhotoRoom-removebg-preview (3).png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Quentin Crestey</h1>
        <h5 className="text-light">Web Développeur junior</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={moi} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header