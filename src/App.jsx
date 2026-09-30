import React, { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AgencyInfo from './components/AgencyInfo'
import Works from './components/Works'
import About from './components/About'
import Services from './components/Services'
import Review from './components/Review'
import DesignPartner from './components/DesignPartner'
import Testimonials from './components/Testimonials'
import StartProject from './components/StartProject'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
    })

    // Expose lenis globally for premium scroll triggers on click
    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    // Hide default cursor globally
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
      document.head.removeChild(style);
    }
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <AgencyInfo />
        <Works />
        <Services />
        <About />
        {/* <Review /> */}
        <DesignPartner />
        <Testimonials />
        <StartProject />
        <Footer />
      </main>
    </>
  )
}

export default App
