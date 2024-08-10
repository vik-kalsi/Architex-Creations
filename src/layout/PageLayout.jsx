import React from 'react'
import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import Footer from '../components/Footer.jsx'
import MobileMenu from "../components/MobileMenu.jsx"


function PageLayout() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const showOrHideMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const hideMobileMenu = () => {
    setShowMobileMenu(false)
  }

  return (
    <>
      <div className='grid justify-center py-6 space-y-8'>
        
        <div className='w-screen flex justify-between px-8'>
          <div>
            <NavLink to="/Architex-Creations/" className={"font-bold md:text-lg lg:text-xl"} onClick={hideMobileMenu}>Architex Creations</NavLink>
          </div>
            
          <div>
            {showMobileMenu && <MobileMenu />}
          </div>

          <div>
            <svg onClick={showOrHideMobileMenu} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer md:hidden" height="24px" viewBox="0 0 24 24" width="24px" fill="#dca54c"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            <svg onClick={showOrHideMobileMenu}  xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hidden md:block lg:hidden" height="40" viewBox="0 96 960 960" width="40" fill="#dca54c"><path d="M133.795 798.538v-47.884h692.884v47.884H133.795Zm0-198.834v-47.883h692.884v47.883H133.795Zm0-198.358v-47.884h692.884v47.884H133.795Z"/></svg>
          </div>
      
      
          <header className='hidden lg:block'>
            <nav className='space-x-10 font-bold text-xl'>
              <NavLink to="/Architex-Creations/">Home</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="faq">FAQ</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </nav>
          </header>
        </div>

        <main className='grid justify-center'>
          <Outlet />
        </main>

        <footer className='grid justify-center'>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default PageLayout