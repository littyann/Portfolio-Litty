import React from 'react'
import Profile from "../../assets/homeg.jpeg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <section className="home section grid"
    >
      <img src={Profile} alt="" className='home__img'/>

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">I'm <span>Litty Ann Jose.</span> MEA(R)N Stack Developer</h1>

          <p className="home__description">
          I am a full stack developer. I love coding and coding is my passion. I like to constantly get acquainted with new technologies and take on challenges and I find joy in it.
          </p>

          <Link to='/about' className='button'>More About Me <span className='button__icon'><FaArrowRight/>
            </span></Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  )
}

export default Home