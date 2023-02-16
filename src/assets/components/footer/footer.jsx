import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <ul>
                    <li><Link to='/'>ANA SƏHİFƏ</Link></li>
                    <li><Link to='/about'>HAQQIMIZDA</Link></li>
                    <li><Link to='/news'>XƏBƏRLƏR</Link></li>
                    <li><Link to='/contact'>BİZİMLƏ ƏLAQƏ</Link> </li>
                    <li><Link to='/sitemap'>SAYTIN XƏRİTƏSİ</Link></li>
                </ul>
                <ul className='ul'>
                    <li> <Link to='/tests'>KSQ/BSQ nümunələr </Link></li>
                    <li> <Link to='/trails'>Ümumi və mövzu sınaqları </Link></li>
                    <li> <Link to='/'>Ölkəmizi tanıyaq </Link></li>
                    <li> <Link to='/'>Coğrafiya gündəliyi  </Link></li>
                    <li> <Link to='/'>Xəritələr</Link></li>
                    <li> <Link to='/'>Təhsil qanunu </Link></li>
                </ul>
                <div className="ka">
                    <p>Copyright © 2023/</p>
                    <Link to='/'>Karimli Aghabala</Link>
                    <p>/Bütün hüquqlar qorunur</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
