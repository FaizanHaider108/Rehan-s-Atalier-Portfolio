import React from 'react'
import "../components/css/Hero.css"
import location from "../../src/assets/Licon.png"
import Arrow from "../../src/assets/Arrow 1.svg"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (

    <div className="hero Mobile-main">
      <div className="hero-container">
        <div className="hero-contant">
          <h1>
            <TypeAnimation sequence={ [
              "Hi, I’m Rehan",
              2000,
              "UI/UX Designer",
              2000,
              "Product Designer",
              2000,
            ] }
              speed={ 50 }
              className='text-accent'
              wrapper='span'
              repeat={ Infinity }
            />
          </h1>
          <span className='location'>
            <img src={ location } alt="" />
            <p>Pakistan</p>
          </span>
          <p className='hero-para'>
            <span className='desktop'>“Product Designer</span>
            <span className='mobile'>“UI/UX  Designer</span>
            - Crafting visually appealing and intuitive digital <br /> products that enhance user experience"</p>

          <a className='cta' href="#portfolio">Check out my work
            <img src={ Arrow } alt="" />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Hero