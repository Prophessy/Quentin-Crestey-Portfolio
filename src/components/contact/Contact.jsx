import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_of01pn9', 'template_6tma3dx', form.current, 'VypEXLH_puetsvOZ2')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Contactez moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>cresteyquentin@hotmail.fr</h5>
            <a href="mailto:cresteyquentin@hotmail.fr" target='_blank'>Envoyer un message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Quentin Crestey</h5>
            <a href="https://m.me/quentin.crestey.3/" target='_blank'>Envoyer un message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33 06.98.55.71.63</h5>
            <a href="https://api.whatsapp.com/send?phone=0698557163" target='_blank'>Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='texte' name='name' placeholder='Nom et Prénom' required/>
          <input type='email' name='email' placeholder='Adresse mail' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact