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

function App() {
  return(
    <>
      <Navbar/>
      <Tagline/>
      <Countdown/>
      <About/>
      <Theme/>
      <Achievement/>
      <Prizes/>
      <Schedule/>
      <Workshop/>
      <FAQ/>
      <Sponsor/>
    </>
  )
}

export default App
