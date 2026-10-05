import { useState } from "react"
import About from "./components/About"
import Audiences from "./components/Audiences"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Markets from "./components/Markets"
import Services from "./components/Services"
import { markets } from "./data"

export default function App() {
  const [cityId, setCityId] = useState(markets[0].id)
  const [ask, setAsk] = useState({ city: markets[0].city, token: 0 })

  function askAbout(city) {
    setAsk({ city, token: Date.now() })
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero onPickCity={setCityId} />
        <Markets cityId={cityId} onPickCity={setCityId} onAsk={askAbout} />
        <Services />
        <Audiences />
        <About />
        <Contact cityName={ask.city} askToken={ask.token} />
      </main>
      <Footer />
    </>
  )
}
