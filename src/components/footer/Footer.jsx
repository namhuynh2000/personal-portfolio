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
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/ruins.huynh/" target='_blank'><FaFacebookF /></a>
        <a href="https://www.instagram.com/ruins_huynh/" target='_blank'><BsInstagram /></a>
        <a href="https://twitter.com/NamHunh79209758" target='_blank'><BsTwitter /></a>
      </div>
    </footer>
  )
}

export default Footer