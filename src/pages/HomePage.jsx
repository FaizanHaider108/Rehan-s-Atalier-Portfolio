import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainLayOut from "../components/MainLayout"
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import LatestProject from '../components/LatestProject'
import About from '../components/About'
const HomePage = () => {
  return (
      <div>
      <MainLayOut>
      {/* hero */}
        <Hero />
        {/* Featured */}
        <Featured />
        {/* latest Project */}
        <LatestProject />
        {/* Contact  */}
        <About />
      </MainLayOut>
    </div>
  )
}

export default HomePage