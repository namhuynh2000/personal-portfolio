import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import { v4 as uuidv4 } from 'uuid';


import data from './data.json'


// const data = [
//   {
//     id: 8,
//     image: IMG8,
//     title: `Super Chat`,
//     github: 'https://github.com/namhuynh2000/superchat',
//     demo: 'https://superchat-adde4.web.app/'
//   },
//   {
//     id: 6,
//     image: IMG6,
//     title: `Personal Portfolio`,
//     github: 'https://github.com/namhuynh2000/personal-portfolio',
//     demo: 'https://namhuynh2000.github.io/personal-portfolio/'
//   },
//   {
//     id: 7,
//     image: IMG7,
//     title: 'Page 404',
//     github: 'https://github.com/namhuynh2000/page-404',
//     demo: 'https://namhuynh2000.github.io/page-404'
//   },
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Covid 19 Tracker',
//     github: 'https://github.com/namhuynh2000/Covid-19-Tracker',
//     demo: 'https://namhuynh2000.github.io/Covid-19-Tracker/'
//   },

//   {
//     id: 3,
//     image: IMG3,
//     title: 'Music Player',
//     github: 'https://github.com/namhuynh2000/Music_Player',
//     demo: 'https://namhuynh2000.github.io/Music_Player/'
//   },
//   {
//     id: 4,
//     image: IMG4,
//     title: 'Book Store',
//     github: 'https://github.com/namhuynh2000/Web_BookStore',
//     demo: 'https://www.youtube.com/watch?v=mWCOY9TfIec&feature=youtu.be'
//   },

//   {
//     id: 2,
//     image: IMG2,
//     title: 'Paint',
//     github: 'https://github.com/namhuynh2000/Paint',
//     demo: '#portfolio'
//   },
//   {
//     id: 5,
//     image: IMG5,
//     title: 'Batch Rename',
//     github: 'https://github.com/namhuynh2000/Batch-Rename',
//     demo: '#portfolio'
//   },

// ]

function Portfolio() {

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(item => {
          return (
            <article key={uuidv4()} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                <a href={item.demo} className='btn btn-primary' rel="noreferrer" target={item.demo === '#portfolio' ? '_self' : '_blank'}>Live Demo</a>
              </div>
            </article>
          )
        })}
      </div>
    </section >
  )
}

export default Portfolio