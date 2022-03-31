import React from 'react'
import './testimonials.css'
import martin from '../../assets/martin.jpg'
import michael from '../../assets/michael.jpg'
import fabien from '../../assets/fabien.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: michael,
    name: 'Michaël Godinho, Mentor',
    review: 'Quentin est un très bon étudiant, il est rigoureux, autonome et apprend rapidement. Je le recommande.'
  },
  {
    avatar: fabien,
    name: 'Fabien Vidale',
    review: `J'ai fais appel à Quentin pour mon projet de site vitrine. Il a su être réactif, disponible et a parfaitement répondu à ma demande.`
  },
  {
    avatar: martin,
    name: 'Martin Hellburg',
    review: `Quentin est quelqu'un de motivé et de passionné. Sa bonne humeur en fait quelqu'un d'agréable à cotoyer quotidiennement.`
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avis</h5>
      <h2>témoignages</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/> 
                </div>  
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials