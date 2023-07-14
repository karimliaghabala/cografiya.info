import React, { useRef} from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const handleClick = (e) => {
    e.preventDefault()
    emailjs.sendForm('default_service', 'template_30nuydk', form.current, 'tahOjscJ--tRKmHKJ')
        .then((result) => {
            console.log(result.text);
            alert('Məktub göndərildi...')
        }, (error) => {
            console.log(error.text);
        });
        text.value = ''
        email.value = ''
        textarea.value = ''
};
  return (
    <>
    <h2>BİZİMLƏ <span>ƏLAQƏ</span></h2>
        <form id="contacts-form" ref={form} onSubmit={handleClick}>
          <div>
            <div class="field">
              <label>Ad və Soyad:</label>
              <input type="text" id='text' name='name' required />
            </div>
            <div class="field">
              <label> E-MAİL :</label>
              <input type="email" id='email' name='email' required />
            </div>
            <div class="field extra">
              <label>Sənin məktubun:</label>
              <textarea cols="1" rows="1" id='textarea' name='mesagge' required></textarea>
            </div>
            <button type="submit">GÖNDƏR</button>
          </div>
        </form>
        </>
  )
}

export default Contact
