import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { IoLibrary } from 'react-icons/io5'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Year Learn Software Engineering</small>
            </article>
            <article className='about__card'>
              <BiCodeAlt className='about__icon' />
              <h5>Skills</h5>
              <small>UI/UX, Front-end, Back-end, Database</small>
            </article>
            <article className='about__card'>
              <IoLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I work as the creative front-end Developer. I love create polished and
            meaningful user experiences. Understanding of software engineering
            paradigms and frameworks for JavaScript, Node.js, C++, . I'm ready
            to collaborate with new opportunities and challenges.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About