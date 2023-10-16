import React from 'react'
import HomePage from './pages/HomePage'
import "./App.css"
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <AboutPage /> } />
          <Route path='/contact' element={<ContactPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App