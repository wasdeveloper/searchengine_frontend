/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light'>
      <a class='navbar-brand' href='/'>
       
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item '>
            <a className='nav-link' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact Us
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
