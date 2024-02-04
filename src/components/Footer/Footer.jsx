/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      
     
    
      <ul className='permalinks'>
        <li><a href="#">Home</a> </li>
        <li><a href="#about">About</a> </li>
        <li><a href="#experience">Experience</a> </li>
        <li><a href="#services">Services</a> </li>
        <li><a href="#portfolio">Portfolio</a> </li>
        <li><a href="#contact">Contact</a> </li>
        
         <a href="#" className='footer_logo'>En vous remerciant pour la visite</a>
      <br />
      <a href="#" className='footer_logo'>© Tous droits réservés</a>
       
      </ul>

    </footer>
  )
}

export default Footer