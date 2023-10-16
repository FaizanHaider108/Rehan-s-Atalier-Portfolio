import React from 'react'
import "../components/css/About.css"
import Arrow from "../assets/Arrow-2.png"
import {Link} from "react-router-dom"
const About = () => {
  return (
      <div className='main'>
          <div className="About-section" id='about'>
               <div className="featured-head">
                    <img src={ Arrow } alt="" />
                    <h1 style={ { "fontWeight": "300" } }>About Me</h1>
            </div>
              <div className="about-contant">
                  <h1>UI/UX Designer - Crafting user-centric digital experiences</h1>
                  <p>
                      Hi, I have a bachelor’s degree in Electrical Engineering and a passion in designing digital products. I’m a Full Stack UI/UX Designer with over five years of experience. I design User Experiences and User Interfaces for cross-platform digital products such as Responsive Websites and Mobile Applications for both iOS and Android.
                </p>
                  <p>
                      I create visually appealing and intuitive designs that enhance user experience by making it easier for users to navigate and interact with the product.
                </p>
                  <p>
                     Let's get in touch! Read more about me    
                    <Link to="/contact" style={{"paddingLeft":"5px"}}>here</Link>.
                </p>
                  
              </div>
        </div>
    </div>
  )
}

export default About