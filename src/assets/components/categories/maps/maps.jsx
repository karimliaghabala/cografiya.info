import React, { useState, useEffect } from 'react'
import './maps.css'

const Maps = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/maps')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    data.reverse()
    return (
        <div className="container-maps">
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        <h2 className='header-maps'>{item.title}</h2>
                        <div className="maps">
                            <img src={item.link} alt="" />
                        </div>
                        <h6>{item.author}</h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Maps