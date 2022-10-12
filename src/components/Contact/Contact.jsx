import React from 'react'
import './contact.css'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact__container">
    <div>
        <form action="">
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