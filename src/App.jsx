import Navbar from './components/Navbar.jsx'
import NewNav from './components/NewNav.jsx'
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
import Scroll from './components/Scroll.jsx'

function App() {
  /*
  <NewNav/>
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
      <Footer/>
  */
  return(
    <div>
      <section id="nav">
        <NewNav/>
      </section>
      <Tagline/>
      <Countdown/>
      <section id="about">
        <About/>
      </section>
      <Theme/>
      <Achievement/>
      <Prizes/>
      <section id="schedule">
        <Schedule/>
      </section>
      <section id="workshop">
        <Workshop/>
      </section>
      <section id="faq">
        <FAQ/>
      </section>
      <Sponsor/>
      <Footer/>
    </div>
  )
}

export default App
