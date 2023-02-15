import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container-header">
        <div className="navbar">
          <ul>
            <li><Link to='/'>ANA SƏHİFƏ</Link></li>
            <li><Link to='/'>HAQQIMIZDA</Link></li>
            <li><Link to='/'>MƏQALƏLƏRİMİZ</Link></li>
            <li><Link to='/'>BİZİMLƏ ƏLAQƏ</Link> </li>
            <li><Link to='/'>SAYTIN XƏRİTƏSİ</Link></li>
          </ul>
        </div>
        <div className="search">s</div>
      </div>
    </header>
  )
}

export default Header