import './App.css'
import Navbar from './components/Navbar.jsx'
import Tagline from './components/Tagline.jsx'
import Countdown from './components/Countdown.jsx'
import About from './components/About.jsx'
import Theme from './components/Theme.jsx'
import Achievement from './components/Achievement.jsx'
import Prizes from './components/Prizes.jsx'
import Schedule from './components/Schedule.jsx'
import Workshop from './components/Workshop.jsx'
import FAQ from './components/FAQ.jsx'
import Sponsor from './components/Sponsor.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return(
    <>
      <Navbar/>
      <Tagline/>
      <Countdown timer="Registration Timer" targetDate="2025-05-24T00:00:00"/>
      <Countdown timer="Event Timer" targetDate="2025-05-26T00:00:00"/>
      <About/>
      <Theme/>
      <Achievement/>
      <Prizes/>
      <Schedule/>
      <Workshop/>
      <FAQ/>
      <Sponsor/>
      <Footer/>
    </>
  )
}

export default App
