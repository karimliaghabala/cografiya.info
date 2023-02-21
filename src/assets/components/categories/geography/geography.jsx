import React,{useState,useEffect} from 'react'
import '../../news/news.css'
import { Link } from 'react-router-dom'

const Geographynews = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api-portal-five.vercel.app/geo/2')
      .then(res => res.json())
      .then(apiData => setData(apiData))
  }, [])
  return (
    <>
      <ul>
        {data?.map(item => (
          <li key={item.id}  className='news-i'>
              <div className="img-new">
                <img src={item.linkimg} alt="" />
              </div>
              <div className="news-text">
                <h3 className='h3'>{item.title}</h3>
                <Link to={`/geographynewstext/${item.id}`}>Ətraflı oxu</Link>
              </div>
          </li>
        ))}
      </ul>


    </>
  )
}

export default Geographynews