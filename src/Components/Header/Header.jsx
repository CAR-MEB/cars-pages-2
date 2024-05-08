import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <Link to="/" className='header_link logo'>Logo</Link>
             <nav className='header_nav'>
                <Link to="Electro" className='header_link'>Electro</Link>
                <Link to="Cabriolet" className='header_link'>Cabriolet</Link>
                <Link to="Jeep" className='header_link'>Jeep</Link>
                <Link to="Premium" className='header_link'>Premium</Link>
                <Link to="Retro" className='header_link'>Retro</Link>
                <Link to="Sports" className='header_link'>Sports</Link>
             </nav>
        </div>
    </div>
  )
}

export default Header