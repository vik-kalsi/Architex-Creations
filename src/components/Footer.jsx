import React from 'react'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <ul className="menu xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max border-2">
        <li>
            <a className='underline underline-offset-4'>Solutions</a>
            <ul>
                <li><a>Design</a></li>
            </ul>
        </li>

        <li>
            <a className='underline underline-offset-4'>Products</a>
            <ul>
                <li><a>UI Kit</a></li>
            </ul>
        </li>
        
        <li>
            <a className='underline underline-offset-4'>Company</a>
            <ul>
                <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="faq">FAQ</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </ul>
        </li>
    </ul>
  )
}

export default Footer