import React from 'react'
import { NavLink } from 'react-router-dom'


function NotFound() {
  return (
    <>
        <h1 className='font-bold text-4xl md:text-6xl'>404 Error Message</h1>
        <p className='text-xl md:text-5xl'>This page does not exist</p>
        <NavLink className="text-xl md:text-5xl" to="/Architex-Creations/">Click here to go Homepage</NavLink>
    </>
  )
}

export default NotFound