import React, { useState, useEffect } from 'react'
import './videos.css'

const Videos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/videos')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    data.reverse()
    return (
        <div className="container-video">
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        <h1 className='header-video'>{item.title}</h1>
                        <div className="videos">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.linkid}`} title="Dünyamarkaları  Dünya ölkələrinin məhşur şirkətləri" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <h6>Redaktor:{item.author}</h6>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Videos