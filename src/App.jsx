import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"

function App() {

  return (
    <>
    <div className="bg-black min-h-screen">
      <header className="font-[outfit]">
        <Navbar/>
        <Hero/>
      </header>
      <section>
        <About/>
        <Services/>
        <Portfolio/>
      </section>
      
    </div>
      
       
    </>
  )
}

export default App
