// import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './pages/Hero'
import AboutMe from './pages/AboutMe'
import Work from './pages/Work'
import ContactMe from './pages/ContactMe'
import Resume from './pages/Resume'



function App() {
  return (
    <>
    <Header />

    <main>

      <Routes>

        <Route path="/" element={<Hero />} />

        <Route path="/about-me" element={<AboutMe />} />

        <Route path="/work" element={<Work />} />

        <Route path="/contact-me" element={<ContactMe />} />

        <Route path="/resume" element={<Resume />} />

      </Routes>
    
    </main>

    <Footer />

    </>
  )
}

export default App