import React from 'react'
import './ksqbsq.css'
import { Link } from 'react-router-dom'

const Tests = () => {
    return (
        <div className='tests'>
            <div className="left-t subjects">
                <Link to='/geographytest'>Coğrafiya</Link>
            </div>
            <div className="right-t subjects">
            </div>
        </div>
    )
}

export default Tests