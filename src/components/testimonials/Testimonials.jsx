import React from 'react'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'



const data = [
  {
    avatar: AVTR1,
    name: 'Playing Guitar',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus praesentium eligendi totam ducimus itaque voluptates. In illum, natus ducimus dolorum harum accusamus maxime, modi eveniet officia voluptatibus a accusantium?'
  },
  {
    avatar: AVTR2,
    name: 'Singing',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus praesentium eligendi totam ducimus itaque voluptates. In illum, natus ducimus dolorum harum accusamus maxime, modi eveniet officia voluptatibus a accusantium?'
  },
  {
    avatar: AVTR3,
    name: 'Photographing',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus praesentium eligendi totam ducimus itaque voluptates. In illum, natus ducimus dolorum harum accusamus maxime, modi eveniet officia voluptatibus a accusantium?'
  },
  {
    avatar: AVTR4,
    name: 'Traveling',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa temporibus praesentium eligendi totam ducimus itaque voluptates. In illum, natus ducimus dolorum harum accusamus maxime, modi eveniet officia voluptatibus a accusantium?'
  }
]

function Testimonials() {
  return (
    <section id='Hobbies'>
      <h5>Personal Details</h5>
      <h2>My Hobbies</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}
              >
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
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