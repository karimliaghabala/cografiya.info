import React, { useEffect, useState } from 'react'
import './main.css'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
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
import Geographytest from '../categories/tests/geographytest';
import Videos from '../categories/videos/videos';
import Maps from '../categories/maps/maps';
import Search from '../search-result/search';
import LeftIcon from '../../images/chevron-left.svg'
import RightIcon from '../../images/chevron-right (2).svg'

const Main = () => {
    const [data, setData] = useState([])
    const [icon,setIcon] = useState(true)

    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData.slice(2,4)))
    }, [])
    data.reverse()
    const clickIcon1 = ()=>{
        setIcon(false)
        if(icon===false){
            setIcon(true)
        }
    }
    return (
        <main>
            <div className="container-main">
                <div className="left-section">
                <div id="icons" onClick={clickIcon1} >
                            {icon?<img src={RightIcon} alt="" />:<img src={LeftIcon} alt="" />}
                        </div>
                    {icon?<div className="category">
                        <p>Kateqoriyalar</p>
                        <ul>
                            <li> <Link to='/tests'>KSQ/BSQ nümunələr </Link></li>
                            <li> <Link to='/trails'>Ümumi və mövzu sınaqları </Link></li>
                            <li> <Link to='/mycountry'>Ölkəmizi tanıyaq </Link></li>
                            <li> <Link to='/geographynews'>Coğrafiya gündəliyi  </Link></li>
                            <li> <Link to='/maps'>Xəritələr</Link></li>
                            <li> <Link to='/videos'>Videolar</Link></li>
                            <li> <Link to='https://e-qanun.az/framework/18343' target='_blank'>Təhsil qanunu </Link></li>
                        </ul>
                    </div>:null}
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
                                    <p>Vaxt: {item.published_date.slice(0,5)}</p>
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
                            <Route path='/geographytest' element={<Geographytest />} />
                            <Route path='/videos' element={<Videos />} />
                            <Route path='/maps' element={<Maps />} />
                            <Route path='/search' element={<Search />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main
