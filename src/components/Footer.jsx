import React from 'react'
import "../components/css/Footer.css"
import behance from "../assets/behance.png"
import dribble from "../assets/dribbble.png"
import linkedin from "../assets/linkedin.png"
import instagram from "../assets/insta.png"
import upwork from "../assets/Upwork.png"
const Footer = () => {
  return (
    <div className='main' id='Footer'>
      <div className="Footer-heading">
        <h1>rahimughal@gmail.com</h1>
        <p>Always down to collaborate when I have the time. I'm hoping to further my career by <br />disrupting the digital product space. Let's get in touch ✌️</p>
      </div>
      <div className='footer-icons'>
        <div className="icons">
          <a href="https://www.behance.net/rehanmirza" target='_blank'>
            <img src={behance} alt="" />
          </a>
        </div>
        <div className="icons">
          <a href="https://dribbble.com/RehanMirza" target='_blank'>
            <img src={dribble} alt="" />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.linkedin.com/in/rehan-mirza/" target='blank'>
            <img src={linkedin} alt="" />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/rehanmirza91/" target='blank'>
            <img src={instagram} alt="" />
          </a>
        </div>
        <div className="icons">
          <a href="https://www.upwork.com/freelancers/~01f264adbb9cd000a5" target='blank'>
            <img src={ upwork} alt="" />
          </a>
        </div>
      </div>

      <div className="footer-para">
        <div className="footer-para-2">
        <p>This site is hand-crafted with care.</p>
          <p>Copyright © Rehan Mirza</p>
          </div>
        <p>Icons courtesy of Iconify. Illustrations courtesy of unDraw.</p>
      </div>
    </div>
  )
}

export default Footer