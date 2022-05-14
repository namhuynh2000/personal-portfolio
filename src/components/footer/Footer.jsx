import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

import './footer.css'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>RUINS HUYNH</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><FaFacebookF /></a>
        <a href=""><BsInstagram /></a>
        <a href=""><BsTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer