import React from 'react'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

import './contact.css'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ynm6xmn', 'template_po93pnf', form.current, 'jCGoHkuQ1K8k-5OCi')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact__container">
    <div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>

        </form>
      </div>
    </div>
      
      
    </section>
  )
}

export default Contact