import React from 'react'
import './main.css'
import {Link} from 'react-router-dom'
import Img from '../../images/newsletter-bg.gif'

export const Main = () => {
    return (
        <main>
            <div className="container-main">
                <div className="left-section">
                    <div className="category">
                        <p>Kateqoriyalar</p>
                        <ul>
                            <li> <Link to='/'>Müəllimmlər </Link></li>
                            <li> <Link to='/'>Şagirdlər </Link></li>
                            <li> <Link to='/'>Sadə Məlumatlar </Link></li>
                            <li> <Link to='/'>Xəbərlər </Link></li>
                            <li> <Link to='/'>Təhsil qanunu </Link></li>
                            <li> <Link to='/'>Vakansiyalar </Link></li>
                        </ul>
                    </div>
                    <div className="sub-news">
                        <div><img src={Img} alt="" /></div>
                        <form>
                            <p></p>
                            <input type="text" name="" id="" />
                            <input type="submit" value='Submit' />
                        </form>
                    </div>
                    <div className="fresh-news"></div>
                </div>
                <div className="right-section">r</div>
            </div>
        </main>
    )
}
