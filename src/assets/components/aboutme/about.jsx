import React from 'react'
import './about.css'
import Savalan from '../../images/savalan.jpeg'
import Agabala from '../../images/aga.png'
import Agadadash from '../../images/agadadahs.jpeg'
import Namik from '../../images/namk.jpeg'

const About = () => {
    return (
        <div className='about'>
            <div className="left-as">
                <div className="agabala h1-name ">
                    <p>Kərimli <span>Ağabala</span></p>
                    <img src={Agabala} alt="" />
                    <p>Web proqramçı </p>
                    <p> Coğrafiya müəllimi</p>
                    <p>İmişli rayonu S.Məmmədov adına Axıcanlı kənd ümumi orta məktəbi</p>
                </div>
                <div className="savalan h1-name ">
                    <p>Nurizadə <span>Savalan</span></p>
                    <img src={Savalan} alt="" />
                    <p>Coğrafiya müəllimi</p>
                    <p>Lerik rayon X.Qənbərov adına Barzavu kənd ümumi orta məktəbi</p>
                </div>
            </div>
            <div className="right-ak">
                <div className="agadadash h1-name ">
                    <p>Dadaşov <span>Ağadadaş</span></p>
                    <img src={Agadadash} alt="" />
                    <p>Coğrafiya müəllimi</p>
                    <p>Quba rayonu E.Bayramov adına Alpan kənd tam orta məktəbi</p>
                </div>
                <div className="namik h1-name">
                    <p>Zakirli <span>Namik</span></p>
                    <img src={Namik} alt="" />
                    <p>Coğrafiya müəllimi</p>
                    <p>Direktor müavini</p>
                    <p>Cəlilabad rayon Üçtəpə kənd tam orta məktəbi</p>
                </div>
            </div>
        </div>
    )
}

export default About