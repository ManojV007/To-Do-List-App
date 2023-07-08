import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav>
        Get Ready to complete your Daily Tasks
      </nav>
      <div className="header">
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>
      </div>
    </>
  )
}

export default Header
