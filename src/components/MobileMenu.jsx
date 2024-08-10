import React from 'react'
import { NavLink } from 'react-router-dom'



function MobileMenu() {
  return (
    <div>
        <nav className='border-4 border-[#dca54c] bg-black z-10 p-3 absolute right-6 top-14 grid font-bold md:right-8 md:top-20 md:text-4xl md:space-y-4 lg:hidden'>
            <NavLink to="/Architex-Creations/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    </div>
  )
}

export default MobileMenu