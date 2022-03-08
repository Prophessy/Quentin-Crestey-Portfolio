import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/belhomme.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: avatar1,
    name: 'Michaël Godinho',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, expedita omnis quibusdam esse adipisci sunt culpa accusamus cum officiis error minus, minima, quo aut quisquam? Impedit praesentium vel ratione dolore!'
  },
  {
    avatar: avatar1,
    name: 'Fabien Vidale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, expedita omnis quibusdam esse adipisci sunt culpa accusamus cum officiis error minus, minima, quo aut quisquam? Impedit praesentium vel ratione dolore!'
  },
  {
    avatar: avatar1,
    name: 'Martin Hellburg',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, expedita omnis quibusdam esse adipisci sunt culpa accusamus cum officiis error minus, minima, quo aut quisquam? Impedit praesentium vel ratione dolore!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avis des clients</h5>
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