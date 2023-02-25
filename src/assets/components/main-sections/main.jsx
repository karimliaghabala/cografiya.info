import React, { useEffect, useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from '../../images/newsletter-bg.gif'
import Banner from '../../images/banner-bg.jpg'
import Contact from '../contact/contact';
import Home from '../home/home'
import About from '../aboutme/about'
import Sitemap from '../sitemap/sitemap'
import News from '../news/news'
import Tests from '../categories/tests/ksqbsq';
import Trails from '../categories/trails/trails';
import Mycountry from '../categories/mycountry/mycountry';
import Newstext from '../news/newstext';
import Geographynews from '../categories/geography/geography';
import Geographynewstext from '../categories/geography/geographytext';

const Main = () => {
    const transition = { type: 'spring', duration: 1 }
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    return (
        <main>
            <div className="container-main">
                <div className="left-section">
                    <motion.div className="category"
                        initial={{ left: '-238px' }}
                        whileInView={{ left: '50px' }}
                        transition={{ ...transition, type: 'tween' }}
                    >
                        <p>Kateqoriyalar</p>
                        <ul>
                            <li> <Link to='/tests'>KSQ/BSQ nümunələr </Link></li>
                            <li> <Link to='/trails'>Ümumi və mövzu sınaqları </Link></li>
                            <li> <Link to='/mycountry'>Ölkəmizi tanıyaq </Link></li>
                            <li> <Link to='/geographynews'>Coğrafiya gündəliyi  </Link></li>
                            <li> <Link to='/'>Xəritələr</Link></li>
                            <li> <Link to='/'>Videolar</Link></li>
                            <li> <Link to='/'>Təhsil qanunu </Link></li>
                        </ul>
                    </motion.div>
                    <div className="sub-news">
                        <div><img src={Img} alt="" /></div>
                        <form>
                            <p>XƏBƏRLƏRƏ ABUNƏ OL</p>
                            <input type="text" placeholder='e-mail ünvanını daxil et' name="" id="" />
                            <input type="submit" value='GÖNDƏR' />
                        </form>
                    </div>
                    <div className="fresh-news">
                        <p>YENI</p>
                        <p>XƏBƏRLƏR</p>
                        <ul>
                            {data?.map(item => (
                                <li className="news" key={item.id}>
                                    <p>{item.published_date}</p>
                                    <p>{item.title}</p>
                                    <Link to={`/newstext/${item.id}`}>Ətraflı oxumaq üçün klik edin</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="right-section">
                    <img src={Banner} alt="" />
                    <p>PROFESSİONAL </p>
                    <p>TƏHSİL</p>
                    <p>PORTALI</p>
                    <div className='all-news'>
                        <Routes>
                            <Route path='/contact' element={<Contact />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/sitemap' element={<Sitemap />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/tests' element={<Tests />} />
                            <Route path='/trails' element={<Trails />} />
                            <Route path='/mycountry' element={<Mycountry />} />
                            <Route path='/newstext/:id' element={<Newstext />} />
                            <Route path='/geographynews' element={<Geographynews />} />
                            <Route path='/geographynewstext/:id' element={<Geographynewstext />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main
