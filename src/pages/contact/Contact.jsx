import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import {FiSend} from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  return (
   <section className="contact section">
    <h2 className="section__title">
      Get In <span>Touch</span>
    </h2>
    
    <div className="contact__container container grid">
      <div className="contact__data">
        <h3 className="contact__title"> Feel free to get in touch with me</h3>
        <p className="contactdescription">
        Feel free to reach out through the following channels: 
        </p>


        <div className="contact__info">
        <div className="info__item">
          <FaEnvelopeOpen className='info__icon'/>
        
      <div>
          <span className="info__title">Mail me</span>
          <h4 className="info__desc">littyannjose14@gmail.com</h4>
      </div>
      </div>


      <div className="info__item">
          <FaPhoneSquareAlt className='info__icon'/>
        
      <div>
          <span className="info__title">Call me</span>
          <h4
          className="info__desc">8281666315</h4>
      </div>
      </div>  


</div>
<div className="contact__socials">
        <a href="https://facebook.com" target='_blank' className="contact__social-link"><FaFacebookF/></a>

        <a href="https://twitter.com" target='_blank' className="contact__social-link"><FaTwitter/></a>

        <a href="https://instagram.com" target='_blank' className="contact__social-link"><FaInstagram/></a>


        <a href="https://linkedin.com" target='_blank' className="contact__social-link"><FaLinkedinIn/></a>


      </div>
    </div>
     
<form className="contact__form">
  <div className="form__input-group">
    <div className="form__input-div">
      <input type="text" placeholder='Your Name' className="form__control" />
    </div>

    <div className="form__input-div">
      <input type="email" placeholder='Your Email' className="form__control" />
    </div>

    <div className="form__input-div">
      <input type="text" placeholder='Your Subject' className="form__control" />
    </div>
  </div>

  <div className="form__input-div">
      <textarea   placeholder='Your Message' className="form__control textarea"></textarea>
    </div>

    <button className="button">
      Send Message
      <span className="button__icon contact__button-icon">
        <FiSend/>
      </span>
    </button>
</form>
</div>
</section>
  )
}

export default Contact