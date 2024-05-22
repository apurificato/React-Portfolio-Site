// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <>
    <Header />

    <main>

      <Routes>

        <Route path="/" element={<Hero />} />

        <Route path="/about-me" element={<AboutMe />} />

        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    
    </main>

    <Footer />

    </>
  )
}

export default App