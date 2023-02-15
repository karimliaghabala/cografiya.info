import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
    <h2>Contact <span>Form</span></h2>
        <form id="contacts-form" action="#">
          <fieldset>
            <div class="field">
              <label>Your Name:</label>
              <input type="text" value=""/>
            </div>
            <div class="field">
              <label>Your E-mail:</label>
              <input type="email" value=""/>
            </div>
            <div class="field">
              <label>Your Website:</label>
              <input type="text" value=""/>
            </div>
            <div class="field extra">
              <label>Your Message:</label>
              <textarea cols="1" rows="1"></textarea>
            </div>
            <div class="alignright"><a href="#">Send Your Message!</a></div>
          </fieldset>
        </form>
        </>
  )
}

export default Contact