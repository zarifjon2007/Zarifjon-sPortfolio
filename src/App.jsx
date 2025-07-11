import { useEffect } from "react"
import About from "./components/About"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-black min-h-screen">
        <header className="font-[outfit]">
          <Navbar />
          <Hero />
        </header>
        <section>
          <About />
          <Services />
          <Portfolio />
          <Contact />
          <Footer />
        </section>

      </div>


    </>
  )
}

export default App
