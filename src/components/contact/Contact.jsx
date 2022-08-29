import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eybff2p', 'template_1w3u8ql', form.current, 'dhtS842LqexXV6-kf');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hqnam.it@gmail.com</h5>
            <div className="contact__option-link">
              <a href="mailto:hqnam.it@gmail.com">Send a message</a>
            </div>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Nam Huỳnh</h5>
            <div className="contact__option-link">
              <a href="https://messenger.com/ruins.huynh" rel="noreferrer" target='_blank'>Send a message</a>
            </div>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>Phone Number</h4>
            <h5>0918303693</h5>
            <div className="contact__option-link">
              <a href="tel:+84918303693">Send a message</a>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='subject' placeholder='Your Subject' required />
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact