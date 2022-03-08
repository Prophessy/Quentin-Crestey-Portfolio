import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Contactez moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>cresteyquentin@hotmail.fr</h5>
            <a href="mailto:cresteyquentin@hotmail.fr">Envoyer un message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>Quentin Crestey</h5>
            <a href="https://m.me/quentin.crestey.3/">Envoyer un message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+21346546</h5>
            <a href="https://api.whatsapp.com/send?phone=0698557163">Envoyer un message</a>
          </article>
        </div>

        <form action=''></form>
      </div>
    </section>
  )
}

export default Contact