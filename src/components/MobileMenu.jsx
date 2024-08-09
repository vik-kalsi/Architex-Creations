import React from 'react'
import { NavLink } from 'react-router-dom'



function MobileMenu() {
  return (
    <div>
        <nav className='border-4 border-[#dca54c] p-3 absolute right-6 top-14 grid font-bold md:right-16 md:top-20 md:text-4xl lg:hidden'>
            <NavLink to="/Architex-Creations/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    </div>
  )
}

export default MobileMenu