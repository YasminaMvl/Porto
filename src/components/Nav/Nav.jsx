import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {RiUserHeartLine} from 'react-icons/ri'
import {BiBookmarkHeart} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiMessage3Line} from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [ activeNav,setActiveNav] = useState ('#')
  return (
    <nav>
    <a href= " # "onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <BiHomeHeart/> </a>
    <a href= " #about " onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <RiUserHeartLine/> </a>
    <a href= " #experience " onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > <BiBookmarkHeart/> </a>
    <a href= " #services " onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} > <RiServiceLine/> </a>
    <a href= " #contact " onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} > <RiMessage3Line/> </a>

    </nav>
  )
}

export default Nav;