import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../news/news.css'
import { Link } from 'react-router-dom'

const Geographynewstext = () => {
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://api-portal-five.vercel.app/geo/2/${id}`)
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [id])
    return (
        <>
            <ul>
                {data?.map(item => (
                    <li className='newstext'>
                        <img src={item.linkimg} className='linkimg' alt="" />
                            <h1 className='title'>{item.title}</h1>
                            <p className='datatime'>{item.data_time}</p>
                            <p className='content'>{item.content}</p>
                            <p className='author'>Redaktor:{item.author}</p>
                    </li>
                ))}
                <Link to='/geographynews'>Bütün xəbərlər</Link>
            </ul>
        </>
    )
}

export default Geographynewstext
