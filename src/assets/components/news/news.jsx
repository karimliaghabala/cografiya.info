import React from 'react'
import './news.css'
import NewsImg from '../../images/geo.jpeg'
import {Link} from 'react-router-dom'

const News = () => {
  return (
    <>
    <div className='news-i'>
        <div className="img-new">
          <img src={NewsImg} alt="" />
        </div>
        <div className="news-text">
        <h3 className='h3'>Coğrafiya təbiət  elmləri sistemində</h3>
        <p>Coğrafiya (yun. γεωγραφία, yerin təsviri, γεια — Yer, torpaq və γραφειν — yazmaq, təsvir etmək) — təbii və istehsal ərazi komplekslərini və onların komponentlərini tədqiq edən təbiət və ictimai elmlər sistemi. </p>
        <Link to='/'>Davamını oxu</Link>
        </div>
    </div>
        <div className='news-i'>
        <div className="img-new">
          <img src={NewsImg} alt="" />
        </div>
        <div className="news-text">
        <h3 className='h3'>Coğrafiya təbiət  elmləri sistemində</h3>
        <p>Coğrafiya (yun. γεωγραφία, yerin təsviri, γεια — Yer, torpaq və γραφειν — yazmaq, təsvir etmək) — təbii və istehsal ərazi komplekslərini və onların komponentlərini tədqiq edən təbiət və ictimai elmlər sistemi. </p>
        <Link to='/'>Davamını oxu</Link>
        </div>
    </div>
        <div className='news-i'>
        <div className="img-new">
          <img src={NewsImg} alt="" />
        </div>
        <div className="news-text">
        <h3 className='h3'>Coğrafiya təbiət  elmləri sistemində</h3>
        <p>Coğrafiya (yun. γεωγραφία, yerin təsviri, γεια — Yer, torpaq və γραφειν — yazmaq, təsvir etmək) — təbii və istehsal ərazi komplekslərini və onların komponentlərini tədqiq edən təbiət və ictimai elmlər sistemi. </p>
        <Link to='/'>Davamını oxu</Link>
        </div>
    </div>
    <div className='news-i'>
        <div className="img-new">
          <img src={NewsImg} alt="" />
        </div>
        <div className="news-text">
        <h3 className='h3'>Coğrafiya təbiət  elmləri sistemində</h3>
        <p>Coğrafiya (yun. γεωγραφία, yerin təsviri, γεια — Yer, torpaq və γραφειν — yazmaq, təsvir etmək) — təbii və istehsal ərazi komplekslərini və onların komponentlərini tədqiq edən təbiət və ictimai elmlər sistemi. </p>
        <Link to='/'>Davamını oxu</Link>
        </div>
    </div>
    <div className='news-i'>
        <div className="img-new">
          <img src={NewsImg} alt="" />
        </div>
        <div className="news-text">
        <h3 className='h3'>Coğrafiya təbiət  elmləri sistemində</h3>
        <p>Coğrafiya (yun. γεωγραφία, yerin təsviri, γεια — Yer, torpaq və γραφειν — yazmaq, təsvir etmək) — təbii və istehsal ərazi komplekslərini və onların komponentlərini tədqiq edən təbiət və ictimai elmlər sistemi. </p>
        <Link to='/'>Davamını oxu</Link>
        </div>
    </div>
    </>
  )
}

export default News