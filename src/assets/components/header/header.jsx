import React,{useState,useEffect} from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Header = () => {
  const transition = { type: 'spring', duration: 1 }
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])

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
          <ul>
            <li><Link to='/'>ANA SƏHİFƏ</Link></li>
            <li><Link to='/about'>HAQQIMIZDA</Link></li>
            <li><Link to='/news'>XƏBƏRLƏR</Link></li>
            <li><Link to='/contact'>BİZİMLƏ ƏLAQƏ</Link> </li>
            <li><Link to='/sitemap'>SAYTIN XƏRİTƏSİ</Link></li>
          </ul>
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
              <input type="text" id='textInput' name='textInput' onChange={(e)=>{setInputValue(e.target.value)}} placeholder='ksq axtar' />
              <Link to='/search'  onClick={useEffect}>Axtar</Link>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header