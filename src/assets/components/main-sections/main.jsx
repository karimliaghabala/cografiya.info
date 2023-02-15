import React from 'react'
import './main.css'
import {Link} from 'react-router-dom'
import Img from '../../images/newsletter-bg.gif'
import Banner from '../../images/banner-bg.jpg'

export const Main = () => {
    return (
        <main>
            <div className="container-main">
                <div className="left-section">
                    <div className="category">
                        <p>Kateqoriyalar</p>
                        <ul>
                            <li> <Link to='/'>KSQ/BSQ nümunələr </Link></li>
                            <li> <Link to='/'>Ümumi və mövzu sınaqları </Link></li>
                            <li> <Link to='/'>Ölkəmizi tanıyaq </Link></li>
                            <li> <Link to='/'>Coğrafiya gündəliyi  </Link></li>
                            <li> <Link to='/'>Xəritələr</Link></li>
                            <li> <Link to='/'>Təhsil qanunu </Link></li>
                        </ul>
                    </div>
                    <div className="sub-news">
                        <div><img src={Img} alt="" /></div>
                        <form>
                            <p>XƏBƏRLƏRƏ ABUNƏ OL</p>
                            <input type="text" name="" id="" />
                            <input type="submit" value='GÖNDƏR' />
                        </form>
                    </div>
                    <div className="fresh-news">
                        <p>YENI</p>
                        <p>XƏBƏRLƏR</p>
                        <div className="news">
                            <p>June 30, 2010</p>
                            <Link to='/'>Sed ut perspiciatis unde</Link>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                    <img src={Banner} alt="" />
                    <div className="text">
                        <p>PROFESSİONAL </p>
                        <p>TƏHSİL</p>
                        <p>PORTALI</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
