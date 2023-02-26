import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './news.css'
import { Link } from 'react-router-dom'

const Newstext = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://api-portal-five.vercel.app/${id}`)
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [id])
    return (
        <>
            <ul>
                {data?.map(item => (
                    <li className='newstext' key={item.id}>
                        <img src={item.linkimg} className='linkimg' alt="" />
                            <h1 className='title'>{item.title}</h1>
                            <p className='datatime'> Vaxt:{item.published_date.slice(0,5)}</p>
                            <p className='content'>{item.content}</p>
                            <p className='author'>Redaktor:{item.author}</p>
                    </li>
                ))}
                    <Link to='/news'>Bütün xəbərlər</Link>
            </ul>
        </>
    )
}

export default Newstext
