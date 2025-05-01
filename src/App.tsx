import { useState } from 'react'
import Contact from './components/Contact.tsx'
import './App.css'
import Footer from './components/Footer.tsx'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'

function App() {


  return (
    <div style={{ backgroundColor: "#FFBD05" }}>
      <NavBar />
      <Hero />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
