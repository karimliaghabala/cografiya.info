import React, { useState, useEffect } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import imageSvg from '../../images/align-justify-svgrepo-com.svg'

const Header = () => {
  const transition = { type: 'spring', duration: 1 }
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const mobile = window.innerWidth<=921 ? true: false;
  const [navMenu, setNavMenu] = useState(false)
  
  const clickİmg = () => {
      setNavMenu(true)
      if(navMenu===true){
        setNavMenu(false)
      }
  }
  useEffect(() => {
    fetch(`https://api-portal-five.vercel.app/search?q=${inputValue}`)
      .then(res => res.json())
      .then(apiData => setData(apiData))
  }, [])
  console.log(data)
  console.log(inputValue)
  return (
    <header>
      <div className="container-header">
        <motion.div className="navbar"
          initial={{ top: '-20px' }}
          whileInView={{ top: '20px' }}
          transition={{ ...transition, type: 'tween' }}
        >
         {(navMenu === false && mobile ===true )? (<img src={imageSvg} alt="" className='svg-nav' onClick={clickİmg} />):
         <ul>
            <li><Link to='/' onClick={clickİmg}>ANA SƏHİFƏ</Link></li>
            <li><Link to='/about' onClick={clickİmg}>HAQQIMIZDA</Link></li>
            <li><Link to='/news' onClick={clickİmg}>XƏBƏRLƏR</Link></li>
            <li><Link to='/contact' onClick={clickİmg}>BİZİMLƏ ƏLAQƏ</Link> </li>
            <li><Link to='/sitemap' onClick={clickİmg}>SAYTIN XƏRİTƏSİ</Link></li>
          </ul>}
        </motion.div>
        <div className="header-bottom">
          <div className="h1">
            <motion.div
              initial={{ left: '-238px' }}
              whileInView={{ left: '118px' }}
              transition={{ ...transition, type: 'tween' }}
            >TƏHSİL MİLLƏTİN GƏLƏCƏYİDİR</motion.div>
            <motion.div
              initial={{ right: '210px' }}
              whileInView={{ left: '400px' }}
              transition={{ ...transition, type: 'tween' }}
            >HEYDƏR ƏLİYEV</motion.div>
          </div>
          <div className="search">
            <form>
              <input type="text" id='textInput' name='textInput' onChange={(e) => { setInputValue(e.target.value) }} placeholder='ksq axtar' />
              <Link to='/search' onClick={useEffect}>Axtar</Link>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header