import React from 'react'
import './ksqbsq.css'
import { Link } from 'react-router-dom'

const Tests = () => {
    return (
        <div className='tests'>
            <div className="left-t subjects">
                <Link to='/'>Ibtidai siniflər</Link>
                <Link to='/'>Azərbaycan tarixi</Link>
                <Link to='/'>Ümumi tarix</Link>
                <Link to='/'>Riyaziyyat</Link>
                <Link to='/'>Azərbaycan dili</Link>
                <Link to='/'>Texnologiya</Link>
                <Link to='/'>Həyat bilgisi</Link>
                <Link to='/'>Musiqi</Link>
                <Link to='/'>Rus dili</Link>

            </div>
            <div className="right-t subjects">
                <Link to='/'>Ədəbiyyat</Link>
                <Link to='/'>Coğrafiya</Link>
                <Link to='/'>Fizika</Link>
                <Link to='/'>Biologiya</Link>
                <Link to='/'>Kimya</Link>
                <Link to='/'>Təsviri İncəsənət</Link>
                <Link to='/'>Fiziki tərbiyə</Link>
                <Link to='/'>İngilis dili</Link>
            </div>
        </div>
    )
}

export default Tests