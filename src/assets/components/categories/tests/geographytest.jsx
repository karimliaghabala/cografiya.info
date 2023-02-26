import React, { useState, useEffect } from 'react'
import './ksqbsq.css'
import { Link } from 'react-router-dom'

const Geographytest = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/testgeoksq')
            .then(res => res.json())
            .then(apiData => setData(apiData))
    }, [])
    data.reverse()

    const [data2, setData2] = useState([])
    useEffect(() => {
        fetch('https://api-portal-five.vercel.app/testgeobsq')
            .then(res => res.json())
            .then(apiData2 => setData2(apiData2))
    }, [])
    data2.reverse()
    return (
    <>
        <h1 className='con-hed'>COĞRAFİYA</h1>
        <div className="container-gt">
            <div className="left-gt">
                <p>Kiçik Summativ Qiymətləndirmə</p>
                <ul className='ksq'>
                    {data?.map(item => (
                        <li key={item.id}>
                            <li>{item.body} <span>({item.datatime.slice(0,10)})</span></li>
                            <li><Link to={item.link}>Yüklə</Link></li>
                            <li>Müəllif:{item.author}</li><hr/>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="right-gt">
                <p>Böyük Summativ Qiymətləndirm</p>
                <ul className='ksq'>
                {data2?.map(item2 => (
                        <li key={item2.id}>
                            <li>{item2.body} <span>({item2.datatime.slice(0,10)})</span></li>
                            <li><Link to={item2.link}>Yüklə</Link></li>
                            <li>Müəllif:{item2.author}</li><hr/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Geographytest