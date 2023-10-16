import React from 'react'
import "../css/AboutHero.css"
import AboutImg from "../../assets/AboutImg.png"
import HeroImg from "../../assets/HeroImage.png"
const AboutHero = () => {
    return (
        <div className='about-hero'>
            <div className="main about-desktop">
                <div className="about-desktop-heading">
                    <h1>UI/UX Designer - Crafting user-centric digital experiences</h1>
                </div>
                <div className="about-desktop-heading-flexbox">
                    <div className="about-desktop-img">
                        <img src={ AboutImg } alt="" />
                    </div>
                    <div className="about-desktop-para">
                        <p>Hi, I'm Rehan - a UI/UX designer with an electrical engineering degree hoping to further my career in the design space.</p>
                        <p>While an electrical engineering degree may not be directly related to UI/UX design, it can certainly provide several skills and knowledge that can be useful in UI/UX designing. Some of the skills that I learned through my degree that helped me understand UI/UX more deeply were, Analytical and Problem-Solving Skills, Technical Skills, Attention to Detail, Familiarity with Technology, and Data Analysis Skills.</p>
                        <p>I have gained over five years of experience working with various businesses and clients of different niches. I have designed User Experiences and User Interfaces for cross-platform digital products such as Responsive Websites and Mobile Applications for both iOS and Android.
                        </p>
                        <p>Outside of design, I enjoy playing both physical sports and eSports, playing guitar, and enjoy exploring the green outdoors. My fun fact is placing 1st & 2nd positions in multiple Music and eSports competitions throughout my uni years.</p>
                    </div>
                </div>
            </div>



            {/*  */ }





            <div className="about-mobile">
                <div className="about-mobile-section">
                     <h4>UI/UX Designer
                        Crafting user-centric digital experiences</h4>
                    <div className="about-sectinon-image">
                       
                        <img src={ HeroImg } alt="" />
                    </div>
                </div>
                <div className="about-mobile-section-para">
                    <div className="mobile-para">
                        <p>Hi, I'm Rehan - a UI/UX designer with an electrical engineering degree hoping to further my career in the design space.</p>
                        <p>While an electrical engineering degree may not be directly related to UI/UX design, it can certainly provide several skills and knowledge that can be useful in UI/UX designing. Some of the skills that I learned through my degree that helped me understand UI/UX more deeply were, Analytical and Problem-Solving Skills, Technical Skills, Attention to Detail, Familiarity with Technology, and Data Analysis Skills.</p>
                        <p>I have gained over five years of experience working with various businesses and clients of different niches. I have designed User Experiences and User Interfaces for cross-platform digital products such as Responsive Websites and Mobile Applications for both iOS and Android</p>
                        <p>Outside of design, I enjoy playing both physical sports and eSports, playing guitar, and enjoy exploring the green outdoors. My fun fact is placing 1st & 2nd positions in multiple Music and eSports competitions throughout my uni years.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutHero