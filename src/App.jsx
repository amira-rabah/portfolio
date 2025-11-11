import styles from './App.module.css'
import React, { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'

import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'


import "@fontsource/outfit"
import "@fontsource/roboto"
import "@fontsource/caveat"
import "@fontsource/oswald"

function App() {

  const [currentLang, setCurrentLang] = useState("en")
  return (
    <Router>
      <div className={styles.App} >
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <Routes>
            <Route path="/" element={<Hero />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
