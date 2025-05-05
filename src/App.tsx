
import Contact from './components/Contact.tsx'
import './App.css'
import Footer from './components/Footer.tsx'
import NavBar from './components/NavBar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import BookNow from './components/BookNow.tsx'
import WhyChoose from './components/WhyChooseUs.tsx'
import Services from './components/Services.tsx'
import ContactNow from './components/ContactNow.tsx'

function App() {


  return (
    <div style={{ backgroundColor: "#FFBD05" }}>
      <NavBar />
      <Hero />
      <About />
      <WhyChoose/>
      <Services/>
      <BookNow/>
      <ContactNow/>
      <Contact />
      <Footer />

    </div>
  )
}

export default App
