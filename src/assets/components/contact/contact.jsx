import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <h2>BİZİMLƏ <span>ƏLAQƏ</span></h2>
        <form id="contacts-form" action="#">
          <div>
            <div class="field">
              <label>Ad və Soyad:</label>
              <input type="text" value=""/>
            </div>
            <div class="field">
              <label> E-mail :</label>
              <input type="email" value=""/>
            </div>
            <div class="field extra">
              <label>Sənin məktubun:</label>
              <textarea cols="1" rows="1"></textarea>
            </div>
            <div class="alignright"><a href="#">GÖNDƏR</a></div>
          </div>
        </form>
        </>
  )
}

export default Contact