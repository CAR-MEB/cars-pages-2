import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import photo from '../../assets/msg689684673-73765.jpg'


const Header = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked,  setIsMenuClicked] = useState("false")
  
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div className='header'>
        <nav>
 matai-1
        <Link to="/" className='header_link logo'><img id='img-logo' src={photo} alt="" /></Link>
=======
        <Link to="/" className='header_link logo'>logo</Link>
 main

        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className='container'>
          <nav className='header_nav'>
             <Link to="/" className='header_link'>Home</Link>
              <Link to="Electro" className='header_link'>Electro</Link>
              <Link to="Cabriolet" className='header_link'>Cabriolet</Link>
              <Link to="Jeep" className='header_link'>Jeep</Link>
              <Link to="Premium" className='header_link'>Premium</Link>
              <Link to="Retro" className='header_link'>Retro</Link>
              <Link to="Sports" className='header_link'>Sports</Link>
          </nav>
        </div>

      </div>
      
    </div>
  )
}

export default Header