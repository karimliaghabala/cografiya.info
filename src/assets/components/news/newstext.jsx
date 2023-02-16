import React, { useState, useEffect } from 'react'
import './news.css'

const Newstext = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    return (
        <>
            <ul>
                {data?.map(item => (
                    <li className='newstext'>
                        <img src={item.linkimg} className='linkimg' alt="" />
                            <h1 className='title'>{item.title}</h1>
                            <p className='datatime'>{item.published_date}</p>
                            <p className='content'>{item.content}</p>
                            <p className='author'>Redaktor:{item.author}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Newstext
