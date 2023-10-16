import React from 'react'
import MainLayOut from "../components/MainLayout"
import AboutHero from '../components/About/AboutHero'
import Reasons from '../components/About/Reasons'

const AboutPage = () => {
  return (
      <>
       <MainLayOut>
        <AboutHero />
        <Reasons />
      </MainLayOut>
      </>
  )
}

export default AboutPage